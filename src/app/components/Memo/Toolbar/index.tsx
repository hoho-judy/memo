import SmallButton from 'app/components/Button/SmallButton';
import { TitleText } from 'app/components/Text';
import React from 'react';
import styled from 'styled-components';
import Block from 'app/components/Block';

import { ReactComponent as PostDeleteIcon } from './assets/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as PostAddIcon } from './assets/post_add_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeBoldIcon } from './assets/format_bold_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeSizeIcon } from './assets/text_fields_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeTodoIcon } from './assets/check_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeImageIcon } from './assets/imagesmode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import SearchInput from 'app/components/Input/SearchInput';

import ReactQuill from 'react-quill';
import { useMemoSlice } from 'store/memo';
import { useDispatch, useSelector } from 'react-redux';
import {
  SearchMemoSelector,
  SelectedMemoListSelector,
} from 'store/memo/selectors';

let icons = ReactQuill.Quill.import('ui/icons');

icons['header'] = <MakeSizeIcon />;
icons['bold'] = <MakeBoldIcon />;
icons['list'] = <MakeTodoIcon />;
icons['image'] = <MakeImageIcon />;

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0 !important;
  border-bottom: 1px solid #e9e9e9 !important;
  padding: 0 !important;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }
`;

const LeftMenu = styled(Menu)`
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 687px) {
    margin-left: -200px;
  }
`;

const RightMenu = styled(Menu)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
`;

export default function MemoToolBar() {
  const { MemoActions } = useMemoSlice();
  const dispatch = useDispatch();
  const search = useSelector(SearchMemoSelector);

  return (
    <Box id="toolbar">
      <LeftMenu>
        <TitleText style={{ marginLeft: '5px' }}>MEMO</TitleText>
        <SmallButton
          onClick={() => dispatch(MemoActions.deleteMemo())}
          Icon={() => <PostDeleteIcon />}
        />
      </LeftMenu>
      <RightMenu>
        <SmallButton
          onClick={() =>
            dispatch(
              MemoActions.addMemo(
                '내용을 입력해주세요.',
                '내용을 입력해주세요.',
              ),
            )
          }
          Icon={() => <PostAddIcon />}
        />
        <div>
          <SmallButton
            className="ql-header"
            value="1"
            onClick={() => {}}
            Icon={() => <MakeSizeIcon />}
          />
          <Block marginRight="5px" />
          <SmallButton
            className="ql-bold"
            onClick={() => {}}
            Icon={() => <MakeBoldIcon />}
          />
          <Block marginRight="5px" />
          <SmallButton
            className="ql-list"
            value="check"
            onClick={() => {}}
            Icon={() => <MakeTodoIcon />}
          />
        </div>
        <div>
          <SmallButton
            className="ql-image"
            onClick={() => {}}
            Icon={() => <MakeImageIcon />}
          />
          <Block marginRight="5px" />
          <SearchInput
            search={search}
            onChange={value =>
              dispatch(MemoActions.searchMemo({ search: value }))
            }
          />
        </div>
      </RightMenu>
    </Box>
  );
}
