import React, { FC } from 'react';

import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageHeader } from '@openshift-console/dynamic-plugin-sdk';
import { ListPageHeaderProps } from '@openshift-console/dynamic-plugin-sdk/lib/extensions/console-types';

import VirtualMachinesCreateButton from './VirtualMachinesCreateButton/VirtualMachinesCreateButton';

type VirtualMachinesListPageHeaderProps = {
  namespace: string;
} & Omit<ListPageHeaderProps, 'title'>;

const VirtualMachinesListPageHeader: FC<VirtualMachinesListPageHeaderProps> = ({
  namespace,
  ...listPageHeaderProps
}) => {
  const { t } = useKubevirtTranslation();

  return (
    <ListPageHeader title={t('VirtualMachines')} {...listPageHeaderProps}>
      <div>
        <VirtualMachinesCreateButton namespace={namespace} />
      </div>
    </ListPageHeader>
  );
};

export default VirtualMachinesListPageHeader;
