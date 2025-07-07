const form = document.querySelector("form");

const alertUser = (notificationMessage, notificationType) => {
  const alertSection = document.createElement("div");
      const marathonWrapper = document.querySelector(".marathon-wrapper");
      const container = document.querySelector(".container");
  alertSection.textContent = notificationMessage;
  alertSection.className = `alert-section center transition ${notificationType}`;

  container.insertBefore(alertSection, marathonWrapper);

  setTimeout(() => alertSection.remove(), 4500);

}

const validateFormData = (name, age, weight, gender, LGA) => {
  if (
    name === "" ||
    age === "" ||
    weight === "" ||
    gender === "" ||
    LGA === ""
  ) {
    alertUser("Ensure you correctly filled the form");
    return false;
  } else {
    return true;
  }
};

const checkAgeQualification = (age) => {
  if (age >= 16 && age <= 65) {
    alertUser("You have been registered", "success");
    return true;
  } else if (age > 65) {
    alertUser("you are to old to run the race", "error");
    return false;
  } else {
    alertUser("You are to young to partake in this race", "error");
    return false;
  }
};
const checkWeightQualification = (weight) => {
  if (weight >= 50 && weight <=120) {
    alertUser("You have been registered", "success");
    return true;
  } else if (weight > 120) {
    alertUser("You are over weight for this race", "error");
    return false;
  } else {
    alertUser("You are under Weighting for this race", "error");
    return false;
  }
};

const CheckLocationQualification = (LGA) => {
  if (LGA != 'Jos North' && LGA != 'Jos South' ){
    alertUser("Your location is not on the race list", "error");
  } else {
    alertUser("You have been registered", "success");
  }
}
const submitFormHandler = (event) => {
  event.preventDefault();

  const form = document.getElementById("marathon_form");
  const formInput = form.querySelectorAll("input");

  registrationDetailsUI = document.querySelector(".registration-details");
  const name = formInput[0].value.trim();
  const age = +formInput[1].value.trim();
  const weight = +formInput[2].value.trim();
  const gender= formInput[3].value.trim();
  const LGA = formInput[4].value.trim();
  console.log("INPUT:::", { name, age, weight, gender, LGA });

  const isCorrectData = validateFormData(name, age, weight, gender, LGA);

   if (isCorrectData) {
     const isAgeQualified = checkAgeQualification(age);
     const isWeightQualified = checkWeightQualification(weight);
     const isLocationQualified = CheckLocationQualification(LGA);

     if (isAgeQualified) { 
       const registrationInfo = document.createElement("section");

       registrationInfo.textContent = `Name: ${name} | age: ${age} | weight: ${weight} | gender: ${gender} | LGA: ${LGA}`;

       registrationDetailsUI.appendChild(registrationInfo);
       registrationDetailsUI.classList.remove("hidden");

       formInput.forEach((current) => (current.value = ""));
     }
   }
};





form.addEventListener("submit", submitFormHandler);
