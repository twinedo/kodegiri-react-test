import React from 'react'
import { useAppSelector } from 'services/redux/hooks';
import styles from 'styles/Home.module.css'
import { useRouter } from 'next/router'
import { Box, Image } from '@chakra-ui/react';


function Detail() {

  const router = useRouter();
  const data = router.query;
  console.log('dataa', data)
  return (
    <main className={styles.main}>
      <Box borderRadius={20}>
      <Image
        src={data?.urls?.thumb}
        alt="image.png"
        width="100%"
        height="100%"
        objectFit="cover"
        borderRadius={20}
        _hover={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', cursor: 'pointer' }} />
      </Box>
    <div>Detail</div>
    </main>
  )
}

export default Detail