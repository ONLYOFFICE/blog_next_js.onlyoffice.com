import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledAudioPlayer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin: 24px 0;
  background: #F5F5F5;
  border-radius: 8px;

  .play-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    min-width: 40px;
    border: none;
    border-radius: 50%;
    background: #FF6F3D;
    cursor: pointer;
    transition: background 0.2s;
    padding: 0;

    &:hover {
      background: #E5633A;
    }

    svg {
      fill: #fff;
      width: 16px;
      height: 16px;
    }
  }

  .player-body {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    min-width: 0;
  }

  .time {
    font-size: 12px;
    line-height: 1;
    color: #666;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    min-width: 70px;
  }

  .progress-wrap {
    flex: 1;
    height: 6px;
    background: #DCDCDC;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    min-width: 60px;

    .progress-bar {
      height: 100%;
      background: #FF6F3D;
      border-radius: 3px;
      transition: width 0.1s linear;
    }
  }

  .speed-btn {
    font-size: 12px;
    font-weight: 600;
    color: #666;
    background: #E8E8E8;
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s;

    &:hover {
      background: #DCDCDC;
    }
  }

  @media ${device.mobile} {
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px 12px;

    .player-body {
      flex: 1;
      min-width: 0;
    }
  }
`;

export default StyledAudioPlayer;
