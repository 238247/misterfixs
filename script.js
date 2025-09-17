function calculateCost() {
  let type = document.getElementById("type").value;
  let grade = document.getElementById("grade").value;
  let meters = document.getElementById("meters").value;

  if (meters === "" || meters <= 0) {
    alert("من فضلك أدخل عدد الأمتار");
    return;
  }

  let costPerMeter = 100; // ثابت كما طلبت
  let total = meters * costPerMeter;

  document.getElementById("result").innerHTML =
    "النوع: " + type + "<br>" +
    "الفرز: " + grade + "<br>" +
    "المساحة: " + meters + " متر<br>" +
    "التكلفة: " + total + " جنيه";
}
