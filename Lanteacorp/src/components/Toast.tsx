import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props { message: string; }
export default function Toast({ message }: Props){
  const [open, setOpen] = useState(true);
  useEffect(()=>{const id=setTimeout(()=>setOpen(false),3000);return()=>clearTimeout(id);},[]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} className="fixed bottom-4 right-4 bg-space-base2 text-neutral-text p-2 rounded" role="status">
          {message}
          <button className="ml-2" onClick={()=>setOpen(false)} aria-label="Close">×</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}