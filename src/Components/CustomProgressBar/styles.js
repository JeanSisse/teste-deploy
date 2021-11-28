import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

export const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 6,
    width: 64,
    borderRadius: 5,
    cursor: 'pointer',
    position: 'relative'
  },
  colorPrimary: {
    // backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#0E8750',
  },
}))(LinearProgress);

export default makeStyles({
  root: {
    display: 'flex',
    gap: 8,
    position: 'absolute',
    bottom: 150
  },
});
