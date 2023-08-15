import React from 'react'
import {motion} from 'framer-motion'

const AnimateFromRight = ({children}) => {

 const rightVariants = {
    initial:{
        x:'100vw'
    },
    animate:{
        x:'0'
    },
    exit:{
        opacity:'0'
    }
 }


  return (
    <motion.div variants={rightVariants} initial="initial" animate="animate" exit="exit">
        {children}
    </motion.div>
  )
}

export default AnimateFromRight

