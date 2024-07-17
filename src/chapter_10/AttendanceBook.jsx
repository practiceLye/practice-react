import React from 'react';

const students = [
    {
        id: 1,
        name: "Inje"
    },
    {
        id: 2,
        name: "Steve"
    },
    {
        id: 3,
        name: "Bill"
    },
    {
        id: 4,
        name: "Jeff"
    },
]

function AttendanceBook(props) {
    return (
        <ul>
           {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
                // return <li key={`student-id-${student.id}`}>{student.name}</li>  // 포맷팅된 문자열을 key로 사용
           })}
           {/* {students.map((student,index) => {
                return <li key={index}>{student.name}</li>      // index를 key로 사용
           })} */}
        </ul>
    );
}

export default AttendanceBook;