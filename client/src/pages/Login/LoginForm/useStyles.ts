import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  inputLabel: {
    color: 'black',
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: '0.8rem',
  },
}));

export default useStyles;
