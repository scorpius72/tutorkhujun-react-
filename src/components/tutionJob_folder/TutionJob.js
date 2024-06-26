import React, { useEffect, useState } from 'react'
import './TutionJob.scss'
import  NavbarComponent from '../navbar_folder/NavbarComponent'
import TutionJobpart1 from './TutionJobpart1'
import TutionJobPart2 from './TutionJobPart2'
import useJobFilter from '../Store/student/JobFilter'
import { getAllJobInfo } from '../../api/student_api/RegisterStudentApi'

function TutionJob(props) {

  const {jobFilterInfo} = useJobFilter();
  const [filterJobArr, setfilterJobArr] = useState([]);
  const [jobInfoArr, setjobInfoArr] = useState([]);

  const updateTheFilterArray = () =>{
    if (!jobInfoArr.length) return;
    let tmpFilterJob = [...jobInfoArr];

    if (jobFilterInfo.TutionType !==""){
      tmpFilterJob = tmpFilterJob.filter((job)=>{
        return job.tutoringType === jobFilterInfo.TutionType;
      });
    }

    if (jobFilterInfo.tutorGender!== ""){
      tmpFilterJob = tmpFilterJob.filter((job) =>{
        return job.tutoringGender === jobFilterInfo.tutorGender;
      });
    }

    if (jobFilterInfo.tutordistrict !== ""){
      tmpFilterJob = tmpFilterJob.filter((job) => {
        return job.jobDistrict === jobFilterInfo.tutordistrict;
      });
    }

    if (jobFilterInfo.tutorArea !== ""){
      tmpFilterJob = tmpFilterJob.filter((job)=>{
        return job.jobArea === jobFilterInfo.tutorArea;
      });
    }

    if (jobFilterInfo.tutorMedium !== ""){
      tmpFilterJob = tmpFilterJob.filter((job)=>{
        return job.tutorMedium === jobFilterInfo.tutorMedium;
      });
    }

    if (jobFilterInfo.tutorClass !== ""){
      tmpFilterJob = tmpFilterJob.filter((job)=>{
        return job.studentClass === jobFilterInfo.tutorClass;
      })
    }
    
    setfilterJobArr( [...tmpFilterJob]);
  }

  useEffect(() => {
    updateTheFilterArray();
  }, [jobFilterInfo, jobInfoArr]);

  const callingGetJobInfo = async() =>{
    const res = await getAllJobInfo();
    setjobInfoArr(res);
  }

  useEffect( ()=>{
    callingGetJobInfo();
  }, [])
  

  return (
    <>
      <NavbarComponent activeLink = {props.activeLink}/>
      <div className='container' style={{marginBottom:'100px'}}>
        <div className='row' style={{margin:'0px 15px'}}>
            <div className='col-3' ><TutionJobpart1/></div>
            { jobInfoArr && <div className='col-9' style={{height:'860px' , overflow: 'scroll', scrollbarWidth:'none' }}><TutionJobPart2 jobInfoArr= {filterJobArr}/></div>}
        </div>
      </div>
    </>
  )
}

export default TutionJob