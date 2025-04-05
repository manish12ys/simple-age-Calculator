// Function to calculate age based on manual day/month/year input
function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; // JavaScript months are 0-based
    const year = parseInt(document.getElementById("year").value);
    const resultDiv = document.getElementById("result");
  
    // Basic input validation
    if (!day || !month && month !== 0 || !year) {
      resultDiv.innerHTML = "Please enter valid day, month, and year.";
      return;
    }
  
    // Create birth date object
    const dob = new Date(year, month, day);
    const today = new Date();
  
    // Check if date is in the future
    if (dob > today) {
      resultDiv.innerHTML = "Date of birth cannot be in the future.";
      return;
    }
  
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
  
    // Adjust for negative days
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }
  
    resultDiv.innerHTML = `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
  }
  
  // Handle theme toggle switch
  document.getElementById("theme-toggle").addEventListener("change", function () {
    document.body.classList.toggle("dark", this.checked);
  });
  