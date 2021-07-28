import * as React from 'react';

interface IProps {
  name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => {
  const { name } = props;
  return <h1>Hello, {name}! Welcome to React and TypeScript.</h1>;
};

Header.defaultProps = {
  name: 'world',
};

export default Header;
