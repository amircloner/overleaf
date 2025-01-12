import { Nullable } from '../../../../../../types/utils'
import { LoadedUpdate } from '../../services/types/update'
import { LoadedLabel } from '../../services/types/label'
import { Selection } from '../../services/types/selection'

type LoadingState =
  | 'loadingInitial'
  | 'loadingUpdates'
  | 'restoringFile'
  | 'ready'

export type HistoryContextValue = {
  updatesInfo: {
    updates: LoadedUpdate[]
    atEnd: boolean
    nextBeforeTimestamp: number | undefined
    freeHistoryLimitHit: boolean
  }
  setUpdatesInfo: React.Dispatch<
    React.SetStateAction<HistoryContextValue['updatesInfo']>
  >
  userHasFullFeature: boolean | undefined
  loadingState: LoadingState
  setLoadingState: React.Dispatch<
    React.SetStateAction<HistoryContextValue['loadingState']>
  >
  error: Nullable<unknown>
  labels: Nullable<LoadedLabel[]>
  setLabels: React.Dispatch<React.SetStateAction<HistoryContextValue['labels']>>
  projectId: string
  selection: Selection
  setSelection: React.Dispatch<
    React.SetStateAction<HistoryContextValue['selection']>
  >
  fetchNextBatchOfUpdates: () => void
  resetSelection: () => void
}
