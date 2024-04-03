const express = require("express");
const { default: mongoose, Schema } = require("mongoose");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("成功連結mongoDB");
  })
  .catch((e) => {
    console.log("連結mongoDB失敗", e);
  });

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    age: Number,
    major: { type: String, required: [true, "每個學生都需要選至少一個主修"] },
    scholarship: {
      merit: Number,
      other: Number,
    },
  }
  // },
  // {
  //   methods: {
  //     printTotalScholarship() {
  //       return this.scholarship.merit + this.scholarship.other;
  //     },
  //   },
  // {
  //   statics: {
  //     findAllMajorStudents(major) {
  //       return this.find({ major: major }).exec();
  //     },
  //   },
  // }
);

studentSchema.methods.printTotalScholarship = function () {
  return this.scholarship.merit + this.scholarship.other;
};

studentSchema.statics.findAllMajorStudents = function (major) {
  return this.find({ major: major }).exec();
};

studentSchema.pre("save", () => {
  fs.writeFile("record.txt", "A new data will be saved...", (e) => {
    console.log("寫進檔案了");
    if (e) throw e;
  });
});

const Student = mongoose.model("Student", studentSchema);
// const newObject = new Student({
//   name: "Esther",
//   age: 27,
//   major: "Mathematics",
//   scholarship: {
//     merit: 6000,
//     other: 7000,
//   },
// });
// newObject
//   .save()
//   .then((saveObject) => {
//     console.log("資料已儲存，儲存的資料是：");
//     console.log(saveObject);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Student.find()
//   .exec()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// app.get("/", async (req, res) => {
//   try {
//     let data = await Student.find().exec();
//     res.send(data);
//   } catch (e) {
//     console.log(e);
//   }
// });

// Student.updateOne({ name: "Esther" }, { name: "Esther Lan" })
//   .exec()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Student.find()
//   .exec()
//   .then((arr) => {
//     arr.forEach((student) => {
//       console.log(
//         student.name + "的總獎學金是" + student.printTotalScholarship()
//       );
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Student.findAllMajorStudents("Mathematics")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

let newStudent = new Student({
  name: "Wilson",
  age: 28,
  major: "CS",
  scholarship: {
    merit: 3000,
    other: 1800,
  },
});
newStudent
  .save()
  .then((data) => {
    console.log("資料已被儲存");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(5000, () => {
  console.log("Running on port 5000");
});
