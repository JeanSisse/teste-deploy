import { BorderLinearProgress } from './styles';
import useStyles from './styles';
import useGlobal from '../../Hooks/Hook-Global/useGlobal';

export default function CustomProgressBar() {
  const classes = useStyles();
  const { steppPassword, registerSuccess } = useGlobal();

  return (
    <div className={classes.root}>
      <BorderLinearProgress className={classes.step1} variant="determinate" value={steppPassword || registerSuccess ? 0 : 100} />
      <BorderLinearProgress variant="determinate" value={steppPassword && !registerSuccess ? 100 : 0} />
      <BorderLinearProgress variant="determinate" value={registerSuccess ? 100 : 0} />
    </div>
  );
}
