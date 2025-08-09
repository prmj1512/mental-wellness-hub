function calculateResult() {
    const q1 = parseInt(document.querySelector('select[name="q1"]').value);
    const q2 = parseInt(document.querySelector('select[name="q2"]').value);
    const total = q1 + q2;

    let message = "";
    if (total <= 1) {
        message = "😊 You're doing well. Keep up the positive habits!";
    } else if (total <= 3) {
        message = "😌 Mild stress detected. Consider daily wellness practices.";
    } else if (total <= 5) {
        message = "😟 Moderate concern. Try talking to someone or journaling.";
    } else {
        message = "🚨 High concern. Please reach out to a mental health professional.";
    }
    document.getElementById("result").innerText = message;
}
