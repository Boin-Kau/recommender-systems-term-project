import styled from '@emotion/styled';
import React from 'react'

const ResultItem : React.FC = () => {
  return (
    <a href='https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000151952&dispCatNo=100000100010008&trackingCd=Cat100000100010008_MID&curation&egcode&rccode&egrankcode'>
      <ResultItemWrap>
        <img src='https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0015/A00000015195203ko.jpg?l=ko'></img>
        <div className='brand'>더랩바이블랑두</div>
        <div className='product'>더랩바이블랑두 올리고 히알루론산 5000토너 500ml</div>
        <div className='price'>34,000원</div>
      </ResultItemWrap>
    </a>
    
  )
}

export default ResultItem;

const ResultItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  img {
    border: 1px #F2F2F2 solid;
    border-radius: 5px;
    width: 312px;
    height: 312px;
  }
  .brand {
    font-size: 14px;
    font-weight: 600;
    margin-top: 12px;
    margin-bottom: 2px;
  }
  .product {
    font-size: 14px;
    margin-bottom: 8px;
  }
  .price {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  
`;