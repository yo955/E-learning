import React, { useState } from "react";
import { Box, TextField, MenuItem, useMediaQuery } from "@mui/material";

const grades = [
  { value: "1st", label: "الصف الأول الثانوي" },
  { value: "2nd", label: "الصف الثاني الثانوي" },
  { value: "3rd", label: "الصف الثالث الثانوي" },
];

const subjects = {
  "1st": ["عام"],
  "2nd": ["علمي", "أدبي"],
  "3rd": ["علمي علوم", "علمي رياضة", "أدبي"],
};

export default function SelectTextFields() {
  const [selectedGrade, setSelectedGrade] = useState("1st");
  const [subjectOptions, setSubjectOptions] = useState(subjects["1st"]);
  const [selectedSubject, setSelectedSubject] = useState(subjects["1st"][0]);

  const handleGradeChange = (event) => {
    const grade = event.target.value;
    setSelectedGrade(grade);
    setSubjectOptions(subjects[grade]);
    setSelectedSubject(subjects[grade][0]); // تعيين مادة افتراضية بعد تغيير الصف
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  // استخدام useMediaQuery للتحقق من حجم الشاشة
  const isSmallScreen = useMediaQuery("(max-width:767px)");

  return (
    <section id="text-filed-section" style={{ marginBottom: "6rem" }}>
      <div className="container">
        <div className="hero-section">
          <h1 style={{ fontSize: isSmallScreen ? "2rem" : "4rem" }}>
            <span>أخــتار </span>
            <span style={{ fontSize: isSmallScreen ? "2.5rem" : "5rem" }} className="main-color">
              مُـدرســك
            </span>
          </h1>
        </div>
        <Box
          id="text-fields"
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: isSmallScreen ? "90%" : "25ch" } }}
          noValidate
          autoComplete="off"
          textAlign="center"
          style={{
            background: "#fde047",
            width: isSmallScreen ? "90%" : "50%",
            margin: "2px auto",
            padding: "3px",
            borderRadius: "3rem",
          }}
        >
          <TextField
            style={{ background: "#fff", margin: "30px 5px" }}
            id="outlined-select-subject"
            select
            label="اختر المادة"
            value={selectedSubject}
            onChange={handleSubjectChange}
          >
            {subjectOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ background: "#fff", margin: "30px 5px" }}
            id="outlined-select-grade"
            select
            label="اختر الصف"
            value={selectedGrade}
            onChange={handleGradeChange}
          >
            {grades.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </div>
    </section>
  );
}
