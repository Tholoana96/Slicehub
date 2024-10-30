const ProgressBar = ({ progress, currentStep }) => {
  const steps = [
    "Login / Register",
    "Lick Your Lips, Almost done!",
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
