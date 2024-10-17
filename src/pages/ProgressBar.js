const ProgressBar = ({ progress, currentStep }) => {
  const steps = [
    "Enter Your Name",
    "Enter Your Contact Details",
    "Proceed to complete order",
  ];

  return (
    <div className="progress-container">
      <div className="progress-label">
        {steps[currentStep]} - {progress}%
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
