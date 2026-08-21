import React, { SVGProps } from 'react';

const SvgrMock = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => <svg ref={ref} {...props} />,
);

export const ReactComponent = SvgrMock;
SvgrMock.displayName = 'SvgrMock';
export default SvgrMock;
