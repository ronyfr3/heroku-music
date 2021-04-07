import React,{useState,useEffect} from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {motion,AnimatePresence} from "framer-motion"
import useOnclickOutside from 'react-cool-onclickoutside'
import {CgMail} from 'react-icons/cg'
import './Modal.css'

const backdrop = {
    visible:{opacity: 1},
    hidden:{opacity: 0}
}
const modal={
    hidden:{y:'-100vh',opacity:0},
    visible:{y:'200px',opacity:1,transition:{delay:0.5}}
}
function Modal() {
    const [showModal,setShowModal] = useState(false)

      const onCloseModal = () => {
        setShowModal(false);
      };
 
    useEffect(()=>{
        setTimeout(()=>setShowModal(true),10000)
    },[setShowModal])
    const ref = useOnclickOutside(()=>{
        onCloseModal();
    })

    return (
        <AnimatePresence exitBeforeEnter>
       
            {
                showModal && (
                    <motion.div className="backdrop"
                       variants={backdrop}
                       initial='hidden'
                       animate='visible'
                       exit='hidden'>
                        <motion.div className="modal"
                        variants={modal}
                        onClose={onCloseModal}
                        ref={ref}
                        >
                         <span className='closeIcon' onClick={()=>setShowModal(false)}><HighlightOffIcon/></span>
                         <img src='./rony.jpg' alt='rony'/>
                         <h1>Abdur Rakib Rony</h1>
                         <h3>Thanks For Visiting</h3>
                         <small><CgMail className='mail'/> rakib.devatmern@gmail.com</small>
                        </motion.div>
                    </motion.div>
        
                )
            }
        </AnimatePresence>
    )
}
export default Modal