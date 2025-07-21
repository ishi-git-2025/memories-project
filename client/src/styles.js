import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({ //when another file imports from makeStyles module without using curly braces, it will get whatever is exported as the default.
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: 'rgba(0,183,255, 1)',
    },
    image: {
      marginLeft: '15px',
    }
  }));

