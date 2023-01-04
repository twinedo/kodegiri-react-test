import React, {useEffect, useState} from 'react'
import styles from 'styles/Home.module.css'
import { useRouter } from 'next/router'
import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { IListPhotos } from 'services/models/photo_list_model';
import { getPhotoById } from 'services/helpers/photosHandler';
import moment from 'moment';
import Link from 'next/link';
import { IoArrowBackCircle } from 'react-icons/io5';

function Detail() {
  const router = useRouter();
  const data = router.query;
  const [detail, setDetail] = useState<IListPhotos>()

  const getData = async (id: any) => {
    try {
      const response = await getPhotoById(id);
      console.log('response', response);
      setDetail(response);
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getData(data?.id)
  }, [])


  return (
    <>

      <main className={styles.main}>
        <Stack spacing={3}>
          <Box cursor="pointer">
            <IoArrowBackCircle color="black" size={40} onClick={() => router.back()} />
          </Box>
          <HStack justify="space-between">
            <HStack spacing={3}>
              <Box
                borderRadius={50}
                width={50}
                height={50}
                border="5px solid white"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                <Image
                  src={detail?.user?.profile_image?.large}
                  alt="image.png"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  borderRadius={20}
                />
              </Box>
              <Text>{detail?.user?.name}</Text>
            </HStack>
            <Text>Likes: {detail?.likes}</Text>
          </HStack>
          <Box borderRadius={20}>
            <Image
              src={detail?.urls?.full}
              alt="image.png"
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius={20}
              _hover={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', cursor: 'pointer' }} />
          </Box>

          <Stack>
            <Text fontWeight="bold">Uploaded at:</Text>
            <Text>{moment(detail?.created_at).format('YYYY - MMM - dddd')}</Text>
          </Stack>
          <Stack>
            <Text fontWeight="bold">Tags: </Text>
            <Text>{detail?.tags?.map((o: {title: string}) => o.title + ', ')}</Text>
          </Stack>
          <Stack>
            <Text fontWeight="bold">Resource: </Text>
            <Link href={`${detail?.links?.html}`}>
              <Text>Unsplash.com</Text>
            </Link>
          </Stack>
        </Stack>
      </main>
    </>
  )
}

export default Detail