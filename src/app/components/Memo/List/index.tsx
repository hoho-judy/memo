import React from 'react';
import styled from 'styled-components';
import MemoItem from '../Item';

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 687px) {
    margin-left: -200px;
    transition: 0.2s;

    &:hover {
      margin-left: 0;
    }
  }
`;

export default function MemoList() {
  return (
    <List>
      <MemoItem
        id={'1'}
        preview={'메모 테스트1'}
        created_at={new Date().toString()}
        selected={true}
      ></MemoItem>
      <MemoItem
        id={'2'}
        preview={'메모 테스트2222 긴 내용 테스트 길어져라'}
        created_at={new Date().toString()}
        selected={false}
      ></MemoItem>
    </List>
  );
}
