import ReactDOM from 'react-dom';
import { Engagespot, EngagespotProps } from '@engagespot/react-component';

export function render(el: string | HTMLElement, props: EngagespotProps) {
  ReactDOM.render(
    <Engagespot {...props} />,
    typeof el === 'string' ? document.querySelector(el) : el
  );
}
