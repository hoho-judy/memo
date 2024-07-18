import MemoEditor from 'app/components/Memo/Editor';
import MemoList from 'app/components/Memo/List';
import MemoToolBar from 'app/components/Memo/Toolbar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function HomePage() {
  return (
    <>
      <div>
        <MemoToolBar></MemoToolBar>
        <FlexRow>
          <MemoList></MemoList>
          <MemoEditor></MemoEditor>
        </FlexRow>
      </div>
    </>
  );
}
