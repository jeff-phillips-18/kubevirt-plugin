import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom-v5-compat';

import { VirtualMachineModelRef } from '@kubevirt-ui-ext/kubevirt-api/console';
import { getName } from '@kubevirt-utils/resources/shared';
import { NodeKind } from '@openshift-console/dynamic-plugin-sdk';
import VirtualMachinesListPageHeader from '@virtualmachines/list/components/VirtualMachinesListPageHeader';
import VirtualMachinesList from '@virtualmachines/list/VirtualMachinesList';
import { VirtualMachineRowFilterType } from '@virtualmachines/utils';

import '@kubevirt-utils/styles/list-managment-group.scss';

const NODE_VM_COLUMN_MANAGEMENT_ID = `node-${VirtualMachineModelRef}`;

type NodeVirtualMachinesListProps = {
  obj: NodeKind;
};

export const NodeVirtualMachinesList: FC<NodeVirtualMachinesListProps> = ({ obj }) => {
  const { cluster } = useParams<{ cluster?: string }>();
  const nodeName = getName(obj);

  const nodeFilter = useMemo(
    () => ({
      [VirtualMachineRowFilterType.Node]: {
        selected: [nodeName],
      },
    }),
    [nodeName],
  );

  return (
    <>
      {/* Empty namespace queries VMs across all namespaces, nodes are not namespaced */}
      <VirtualMachinesListPageHeader hideFavoriteButton namespace="" />
      <VirtualMachinesList
        cluster={cluster}
        columnManagementID={NODE_VM_COLUMN_MANAGEMENT_ID}
        hideFilterBar
        hideSearchBar
        isSearchResultsPage={false}
        kind={VirtualMachineModelRef}
        namespace=""
        presetFilters={nodeFilter}
      />
    </>
  );
};

export default NodeVirtualMachinesList;
