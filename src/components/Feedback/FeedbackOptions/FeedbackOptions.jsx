import PropTypes from 'prop-types';
import { Button } from 'components/Button';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const state = Object.keys(options);
  return (
    <>
      {state.map(name => {
        return (
          <Button key={nanoid()} name={name} handleBtn={onLeaveFeedback} />
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
