const check=()=>{
    let score = 0
    let right_answer = document.getElementById("q1-a");
    let q1_answer_b = document.getElementById("q1-b");
    let q1_answer_c = document.getElementById("q1-c");
    let q1_answer_d = document.getElementById("q1-d");
    if (right_answer.checked == true) {
        score++
        alert('Q1 answer right')
    } else {
        alert('Q1 answer wrong')
    }

    let right_answer2 = document.getElementById("q2-a");
    let q2_answer_b = document.getElementById("q2-b");
    let q2_answer_c = document.getElementById("q2-c");
    let q2_answer_d = document.getElementById("q2-b");
    if (q2_answer_b.checked == true) {
        score++
        alert('Q2 answer right')
    } else {
        alert('Q2 answer wrong')
    }


    let q3_answer_a = document.getElementById("q3-a");
    let q3_answer_b = document.getElementById("q3-b");
    let q3_answer_c = document.getElementById("q3-c");
    let q3_answer_d = document.getElementById("q3-b");
    if (q3_answer_a.checked == true) {
        score++
        alert('Q3 answer right')
    } else {
        alert('Q3 answer wrong')
    }

    let q4_answer_a = document.getElementById("q4-a");
    let q4_answer_b = document.getElementById("q4-b");
    let q4_answer_c = document.getElementById("q4-c");
    let q4_answer_d = document.getElementById("q4-b");
    if (q4_answer_b.checked == true) {
        score++
        alert('Q4 answer right')
    } else {
        alert('Q4 answer wrong')
    }


    let q5_answer_a = document.getElementById("q5-a");
    let q5_answer_b = document.getElementById("q5-b");
    let q5_answer_c = document.getElementById("q5-c");
    let q5_answer_d = document.getElementById("q5-d");
    if (q5_answer_d.checked == true) {
        score++
        alert('Q5 answer right')
    } else {
        alert('Q5 answer wrong')
    }

    alert("your score is "+ score++)



}