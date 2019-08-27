/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import React from 'react';
import styles from './Icon.css';

export type IconType =
  | 'arrow'
  | 'components'
  | 'flame-chart'
  | 'interactions'
  | 'profiler'
  | 'ranked-chart'
  | 'search'
  | 'settings';

type Props = {|
  className?: string,
  type: IconType,
|};

export default function Icon({className = '', type}: Props) {
  let pathData = null;
  switch (type) {
    case 'arrow':
      pathData = PATH_ARROW;
      break;
    case 'components':
      pathData = PATH_COMPONENTS;
      break;
    case 'flame-chart':
      pathData = PATH_FLAME_CHART;
      break;
    case 'interactions':
      pathData = PATH_INTERACTIONS;
      break;
    case 'profiler':
      pathData = PATH_PROFILER;
      break;
    case 'ranked-chart':
      pathData = PATH_RANKED_CHART;
      break;
    case 'search':
      pathData = PATH_SEARCH;
      break;
    case 'settings':
      pathData = PATH_SETTINGS;
      break;
    default:
      console.warn(`Unsupported type "${type}" specified for Icon`);
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.Icon} ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d={pathData} />
    </svg>
  );
}

const PATH_ARROW = 'M8 5v14l11-7z';

const PATH_COMPONENTS =
  'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z';

const PATH_FLAME_CHART = `
  M10.0650893,21.5040462 C7.14020814,20.6850349 5,18.0558698 5,14.9390244 C5,14.017627
  5,9.81707317 7.83333333,7.37804878 C7.83333333,7.37804878 7.58333333,11.199187 10,
  10.6300813 C11.125,10.326087 13.0062497,7.63043487 8.91666667,2.5 C14.1666667,3.06910569
  19,9.32926829 19,14.9390244 C19,18.0558698 16.8597919,20.6850349 13.9349107,21.5040462
  C14.454014,21.0118505 14.7765152,20.3233394 14.7765152,19.5613412 C14.7765152,17.2826087
  12,15.0875871 12,15.0875871 C12,15.0875871 9.22348485,17.2826087 9.22348485,19.5613412
  C9.22348485,20.3233394 9.54598603,21.0118505 10.0650893,21.5040462 Z M12.0833333,20.6514763
  C11.3814715,20.6514763 10.8125,20.1226027 10.8125,19.4702042 C10.8125,18.6069669
  12.0833333,16.9347829 12.0833333,16.9347829 C12.0833333,16.9347829 13.3541667,18.6069669
  13.3541667,19.4702042 C13.3541667,20.1226027 12.7851952,20.6514763 12.0833333,20.6514763 Z
`;

const PATH_INTERACTIONS = `
  M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2
  2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55
  4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02
  9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55
  2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z
`;

const PATH_PROFILER = 'M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z';

const PATH_SEARCH = `
  M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91
  16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99
  5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z
`;

const PATH_RANKED_CHART = 'M3 5h18v3H3zM3 10.5h13v3H3zM3 16h8v3H3z';

const PATH_SETTINGS = `
  M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49
  1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38
  2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11
  1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4
  1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49
  1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5
  3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z
`;
