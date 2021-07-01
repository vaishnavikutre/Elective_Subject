import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router-dom";
import Select from '..//..//reusableComponent/DropDown' 
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from "../../reusableComponent/TextField";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';


import "../style.css"

const subject = [
    "Computer Science",
    "Electronics and Communication",
    "Civil",
    "Electrical",
  ];

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData1(usn,name,subject,project,sem) {
    return { usn,name,subject,project,sem};
  }
  
  const roww = [
    createData1('2ji18cs053','Vaishnavi','english','elective','fifth'),
    createData1('2ji18cs054','Vaishali','english','elective','sixth'),
    createData1('2ji18cs054','Vaishali','english','elective','sixth'),
    createData1('2ji18cs054','Vaishali','english','elective','sixth')
  ];
  







const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0),
    },
    table1: {
        minWidth: 500,
       minHeight: 170
        
      },
      table2: {
        minWidth: 700,
        minHeight:0
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      papermodal: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 12, 9),
      },
}));

function createData(name) {
    return { name };
  }
  
  const rows = [
    createData('Python'),
    createData('Advance Java')
  ];
export default function Facultydash(props){

    localStorage.setItem('IS_LOGGED_IN', 'false')
    console.log(localStorage.getItem('IS_LOGGED_IN'));
    const classes = useStyles();
    const history = useHistory();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const schema = yup.object().shape(
      {
      subjectcode: yup.string().required('This field is required'),
      scopeofsubject: yup.string().required('This field is required'),
      futurecompanies: yup.string().required('This field is required'),
      totalmarks: yup.string().required('This field is required'),
      syllabus: yup.mixed().required('PDF file is not choosen'),
      video: yup.mixed().required('Upload the video')
    })
  
    const formik = useFormik(
      {
        initialValues: {
          subjectcode: '',
          scopeofsubject: '',
          futurecompanies: '',
          totalmarks: '',
          syllabus:'',
          video:''
        },
        validationSchema: schema,
        onSubmit: (data) => {
          axios({
            url: 'http://127.0.0.1:5000/Faculty/FacultyDash',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            data: data
          }).then((response) => {
            console.log(response);
            // if (response.data.message === "valid user")
            //     successToast("successfully login");
            // else
            //     errorToast("Invalid user name or password");
  
            if (response.data.status === 1) {
              localStorage.setItem('IS_LOGGED_IN', 'true')
              console.log(localStorage.getItem('IS_LOGGED_IN'));
            }
            else {
              localStorage.setItem('IS_LOGGED_IN', 'false')
            }
  
  
  
          }).catch((error) => {
            console.log(error)
            // errorToast("something went wrong");
          })
        }
        }
  )
  
    return(
      console.log(formik),

        <div>
        <div>
        <AppBar position="fixed">
        <Toolbar>
         <div className="nav-item1">
         <Typography variant="h6" noWrap>
            Faculty DashBoard
          </Typography>
         </div>
          <div>
              <Button color="inherit"  onClick={() => history.push("/Login")}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      </div>
      <div className="parentcontainerfacultydash" ><div className="firsttablefacultydash">
         <TableContainer component={Paper}>
      <Table className={classes.table1} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><div style={{ fontSize: 20, textAlign: "center" }}>Allocated Electives</div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow  key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    <div className="sectablefacultydash">
    <TableContainer component={Paper}>
      <Table className={classes.table2} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><div style={{ fontSize: 20, textAlign: "center"}}>Add Electives Information</div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
            <TableCell  component="th" scope="row" size="small" className="hello" style={{flexDiretion:"row",justifyContent:"space-around"}}>
              {row.name}
              <div className="button">
              <Button variant="contained" color="primary" disableElevation type="button" onClick={handleOpen}>
                Add
              </Button>
              <form onSubmit={formik.handleSubmit} >
             
              <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.papermodal}>
            <h2 id="transition-modal-title" style={{fontFamily:"serif",textAlign:"center",borderBottom:"groove"}}>Add Subjects!!</h2>
            <div className="textdiv">
              <label >Subject Code:</label>
              <TextField
               label="Subject Code"
               variant="outlined"
               name="subjectcode"
               handleChange={formik.handleChange}
               value={formik.values.subjectcode}
               onBlur={formik.handleBlur}
               error={formik.errors.subjectcode}
               touched={formik.touched.subjectcode}/>
             </div>
             <div className="textdiv">
              <label>Scope of Subject:</label>
              <TextField
              label="Scope of Subject"
              variant="outlined"
              name="scopeofsubject"
              handleChange={formik.handleChange}
              value={formik.values.scopeofsubject}
              onBlur={formik.handleBlur}
              error={formik.errors.scopeofsubject}
              touched={formik.touched.scopeofsubject}/>
            </div>                        
            <div className="textdiv">
             <label>Future companies:</ label>
              <TextField
              label="Future companies"
              variant="outlined"
              name="futurecompanies"
              handleChange={formik.handleChange}
              value={formik.values.futurecompanies}
              onBlur={formik.handleBlur}
              error={formik.errors.futurecompanies}
              touched={formik.touched.futurecompanies}/>
            </div >
            <div className="textdiv">
              <label>Total Marks:</label>
              <TextField
              label="Total Marks"
                variant="outlined"
                name="totalmarks"
                handleChange={formik.handleChange}
                value={formik.values.totalmarks}
                onBlur={formik.handleBlur}
                error={formik.errors.totalmarks}
                touched={formik.touched.totalmarks}/>
            </div>
            <div className="textdiv">
            <label>Add Syllabus:</label>
           <TextField
                 width={225}
                  
                   type="file"
                    name="syllabus"
                    handleChange={formik.handleChange}
                    value={formik.values.syllabus}
                    onBlur={formik.handleBlur}
                    error={formik.errors.syllabus}
                    touched={formik.touched.syllabus}
                    />
                    </div>
            <div className="textdiv">
            <label>Add Video:</label>
           <TextField
                 width={225}
                  
                   type="file"
                    name="video"
                    value={formik.values.video}
                    onBlur={formik.handleBlur}
                    error={formik.errors.video}
                    touched={formik.touched.video}
                    handleChange={formik.handleChange}
                    />
                    </div>
             <center>
           <button  type="Submit" 
          title="Submit" disabled={!(formik.dirty && formik.isValid) ? true : false} size="large">Submit</button>
              </center>
          </div>
        </Fade>
      </Modal>
      </form>
     
              <Button variant="contained" color="primary" disableElevation>
                Update
              </Button>
              </div>
              </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div><div className="avgRating">
        <h4 style={{fontWeight:500,margin:2}}>Average Rating</h4><hr/>
        <h3>5</h3>
    </div>
    <div className="selectElectiveSub">
        <h4 style={{fontWeight:500,margin:2}}>Select Elective Subject</h4><hr/>
        <Select
                width={350}
                    label=" Select Subject"
                    data={subject}
                    name="subject"
                  />
    </div>
    </div>
    <div className="facultyTabledash">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UNS</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Subject</StyledTableCell>
            <StyledTableCell align="right">Project</StyledTableCell>
            <StyledTableCell align="right">Sem</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roww.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.usn}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.subject}</StyledTableCell>
              <StyledTableCell align="right">{row.project}</StyledTableCell>
              <StyledTableCell align="right">{row.sem}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
      </div>
      
    )
}