function check() {
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;
    var q7 = document.quiz.question7.value;
    var q8 = document.quiz.question8.value;
    var q9 = document.quiz.question9.value;
    var q10 = document.quiz.question10.value;
    var reply = document.getElementById("reply");
    var user = document.getElementById("userName");
    var answer = 0;

    if (user.value == "") {
        alert("Please input your Name in the space Provided");
    } else {
    if (q1 == "James") {
        answer++;
    }

    if (q2 == "Enoch") {
        answer++;
    }

    if (q3 == "Abraham") {
        answer++;
    }

    if (q4 == "helping a friend") {
        answer++;
    }

    if (q5 == "John the Beloved") {
        answer++;
    }

    if (q6 == 7) {
        answer++;
    }

    if (q7 == "It is a must") {
        answer++;
    }

    if (q8 == "Yes") {
        answer++;
    }

    if (q9 == "worship") {
        answer++;
    }

    if (q10 == "People with clean hands, a pure heart and those who do not lift up their soul unto vanity nor swear deceitfully") {
        answer++;
    }

    quiz.style.display = "none";
    user.style.display = "none";

    if (answer <= 5) {
        reply.innerHTML = "Dear " + user.value + ". Your Score is " + answer + "/10. Daddy go hear am. 😂😂😂";
    } else {
        reply.innerHTML = "Dear " + user.value + ". Your Score is " + answer + "/10. This is Awesome 😊😊😊";
    }

}
    
}