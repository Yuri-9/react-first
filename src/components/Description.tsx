import * as React from 'react';

interface IProps {
  countBy122: number;
}

const Header: React.SFC<IProps> = (props: IProps) => {
  const { countBy122 } = props;
  const [count, setCount] = React.useState(0);

  // setCount(count + countBy);

  return (
    <div>
      <p>My favorite number is {count}</p>
      <button onClick={() => setCount(count + countBy122)}>Increase</button>
    </div>
  );
};

export default Header;
