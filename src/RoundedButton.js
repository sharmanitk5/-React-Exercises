export default function RoundedButton({ label, active }) {
    function getClassName() {
      if (active == true) {
        return "blue";
      } else {
        return "red";
      }
    }
    return (<div className={getClassName()}>{label}</div>);
  }
  