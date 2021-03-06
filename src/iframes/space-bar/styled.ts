import styled from "styled-components"
import { getSizeBy, getColor } from "@netdata/netdata-ui"

const spacesBarZIndex = 4

export const ListContainer = styled.div`
  position: fixed;
  z-index: ${spacesBarZIndex};
  left: 0;
  //height: calc(100vh - 56px);
  width: ${getSizeBy(7)};
  padding-top: ${getSizeBy(2)};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SpacesList = styled.div`
  overflow: auto;
`

export const SeparatedSection = styled.div`
  position: relative;
  width: 100%;
  padding: ${getSizeBy(2)} 0;
  display: flex;
  justify-content: center;
  &::before {
    position: absolute;
    content: "";
    width: ${getSizeBy(3)};
    height: 1px;
    top: 0;
    left: ${getSizeBy(2)};
    background: ${getColor(["borderColor"])};
  }
`

export const SpacePlaceholder = styled.div`
  width: ${getSizeBy(5)};
  height: ${getSizeBy(5)};
  border-radius: ${getSizeBy()};
  border: 2px dotted ${getColor(["white", "pure"])};
  margin-bottom: ${getSizeBy(2)};
`
