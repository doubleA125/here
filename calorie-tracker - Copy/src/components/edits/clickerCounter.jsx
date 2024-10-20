function ClickCounter(props) {
  const { counterHandler } = props;

  const onClickHandler = () => {
    counterHandler((previousValue) => previousValue + 1);
    console.log("Clicked");
  };

  return (
    <button type="button" onClick={onClickHandler}>
      Click Me
    </button>
  );
}

export default ClickCounter;
