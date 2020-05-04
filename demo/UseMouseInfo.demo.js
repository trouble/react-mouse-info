import { useMouseInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from './LogProps';

const UseMouseInfo = () => {
  const mouseInfo = useMouseInfo();
  return LogProps(mouseInfo);
};


export default UseMouseInfo;
