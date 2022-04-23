import React, { useEffect, useState } from 'react';
import {Container, Loading,Card} from './components'
import { Pagination } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import { getPost} from './services/postService'

 const App = () => {
    const { data, pending, totalPage} = useSelector(state => state.post)
     const dispatch = useDispatch()
    const [page,setPage] = useState(1)

    useEffect(() => {
      dispatch(getPost(page))
    }, [page,dispatch])

    const handlePageClick = (e,p) => {
      setPage(p)
    }

   return(
     <div className='d-flex flex-column align-items-center justify-content-center gap-2 mx-auto'>
   <Container>
     {pending ? <Loading count={7}/>:
     data.map((post,i) => <Card text={post.body} key={i}/>)
     }
   </Container>
    <Pagination count={Math.floor(+totalPage/8)} color="primary" onChange={handlePageClick}/>
     </div>
   )
};
 
export default App;
