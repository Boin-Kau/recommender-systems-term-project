import { AccountBookOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'
import { Plane, Watch } from 'react-loader-spinner';
import { useRecoilValue } from 'recoil';
import ResultItem from '../features/ResultItem/ResultItem';
import { selectedSkinTonState } from '../features/SkinTon/atom';
import { selectedSkinTroubleListState } from '../features/SkinTrouble/atom';
import { selectedSkinTypeState } from '../features/SkinType/atom';
import { customApiClient } from '../services/apiClient';

const Result = () => {

  const skinType = useRecoilValue(selectedSkinTypeState);
  const skinTon = useRecoilValue(selectedSkinTonState);
  const skinTroubleList = useRecoilValue(selectedSkinTroubleListState);
  console.log(skinType);
  console.log(skinTon);
  console.log(skinTroubleList);

  

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // API 호출
    // getCFList();
    // getCBFList();

    // 정상적으로 response를 받으면 flag값을 true로

  },[]);

  const getCFList = async () => {

    let url = `cf?skintype=${skinType}&skintone=${skinTon}`;
    skinTroubleList.map((item) => {
      url += `&skinworry=${item}`
    })
    console.log(url);
    
    const data = await customApiClient('get', url);

    //서버에러
    if (!data) {
      console.log('서버에러');
      return;
    } 

    console.log(data);
    data && setIsLoading(false);
  }
  const getCBFList = async () => {
    let url = `cbf?skintype=${skinType}&skintone=${skinTon}`;
    skinTroubleList.map((item) => {
      url += `&skinworry=${item}`
    })
    console.log(url);

    const data = await customApiClient('get', url);
    
    //서버에러
    if (!data) {
      console.log('서버에러');
      return;
    } 

    console.log(data);
    data && setIsLoading(false);
  }


  return (
    <ResultWrap>
      {
        !isLoading ?
          <ContentWrap>
            <div className='headerWrap'>
              <img src='https://klinegroup.com/wp-content/uploads/naturals-and-cbd-blog-apr-2019.jpg'></img>
              <div className='headerTitle'>당신에게 딱 맞는 화장품은 바로~!</div>
            </div>
            <div className='resultWrap'>
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
            </div>
            <div style={{fontSize:'32px', marginLeft:'100px'}}>당신과 비슷한 유저가 선호하는 제품은?</div>
            <div className='similarUserWrap'>
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
              <ResultItem />
            </div>
            <div style={{padding:'100px', backgroundColor:'rgb(240, 245, 237)', fontSize:'18px', fontWeight:'500', color:'#439757'}}>
              <AccountBookOutlined style={{marginRight:'4px'}} />
              TEAM MAKEUP
            </div>
            
          </ContentWrap>
          :
          <LoadingWrap>
            <Plane ariaLabel="loading-indicator" />
            <div>결과 분석 중입니다!</div>
          </LoadingWrap>
          
      }
    </ResultWrap>
  )
}

export default Result;


const ResultWrap = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
`;

const ContentWrap = styled.div`
  .headerWrap {
    position: relative;
    height: 550px;

    img {
      width: 100%;
    }
    .headerTitle {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      width: 640px;
      background-color: white;
      border: 0.5px solid rgba(0, 0, 0, 0.05);
      border-radius: 20px;
      box-shadow: rgb(0 0 0 / 4%) 0px 25px 35px;
      padding: 50px 0px;
      text-align: center;
      font-size: 32px;
      font-weight: 600;
      color: black;
    }
  }
  .resultWrap {
    margin: 100px ;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .similarUserWrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 30px 100px;

  }
  
`;

const LoadingWrap = styled.div`
  display: flex;
  padding: 100px;
  align-items: center;
  flex-direction: column;

  div {
    font-size: 16px;
    font-weight: 600;
  }
`;