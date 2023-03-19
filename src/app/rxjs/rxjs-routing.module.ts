import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsComponent } from './rxjs.component';
import { AjaxComponent } from './operators/ajax/ajax/ajax.component';
import { DeferComponent } from './operators/defer/defer/defer.component';
import { FromComponent } from './operators/from/from/from.component';
import { FromEventComponent } from './operators/fromevent/from-event/from-event.component';
import { FromEventPatternComponent } from './operators/fromEventPattern/from-event-pattern/from-event-pattern.component';
import { GenerateComponent } from './operators/generate/generate/generate.component';
import { IntervalComponent } from './operators/interval/interval/interval.component';
import { OfComponent } from './operators/of/of/of.component';
import { RangeComponent } from './operators/range/range/range.component';
import { ThrowErrorComponent } from './operators/throw-error/throw-error/throw-error.component';
import { TimerComponent } from './operators/timer/timer/timer.component';
import { IifComponent } from './operators/iif/iif/iif.component';
import { CombineLatestComponent } from './operators/combineLatest/combine-latest/combine-latest.component';
import { ConcatComponent } from './operators/concat/concat/concat.component';
import { ForkJoinComponent } from './operators/fork-join/fork-join/fork-join.component';
import { MergeComponent } from './operators/merge/merge/merge.component';
import { PartitionComponent } from './operators/partition/partition/partition.component';
import { RaceComponent } from './operators/race/race/race.component';
import { ZipComponent } from './operators/zip/zip/zip.component';
import { BufferComponent } from './operators/buffer/buffer/buffer.component';
import { BufferCountComponent } from './operators/buffer-count/buffer-count/buffer-count.component';
import { BufferTimeComponent } from './operators/buffer-time/buffer-time/buffer-time.component';
import { BufferToggleComponent } from './operators/buffer-toggle/buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './operators/buffer-when/buffer-when/buffer-when.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map/concat-map.component';
import { ExhaustMapComponent } from './operators/exhaust-map/exhaust-map/exhaust-map.component';
import { ExpandComponent } from './operators/expand/expand/expand.component';
import { GroupByComponent } from './operators/group-by/group-by/group-by.component';
import { MapComponent } from './operators/map/map/map.component';
import { MergeMapComponent } from './operators/merge-map/merge-map/merge-map.component';
import { MergeScanComponent } from './operators/merge-scan/merge-scan/merge-scan.component';
import { PairwiseComponent } from './operators/pairwise/pairwise/pairwise.component';
import { ScanComponent } from './operators/scan/scan/scan.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map/switch-map.component';
import { WindowComponent } from './operators/window/window/window.component';
import { WindowCountComponent } from './operators/window-count/window-count/window-count.component';
import { WindowTimeComponent } from './operators/window-time/window-time/window-time.component';
import { WindowToggleComponent } from './operators/window-toggle/window-toggle/window-toggle.component';
import { WindowWhenComponent } from './operators/window-when/window-when/window-when.component';
import { AuditComponent } from './operators/audit/audit/audit.component';
import { AuditTimeComponent } from './operators/audit-time/audit-time/audit-time.component';
import { DebounceComponent } from './operators/debounce/debounce/debounce.component';
import { DebounceTimeComponent } from './operators/debounce-time/debounce-time/debounce-time.component';
import { DistinctComponent } from './operators/distinct/distinct/distinct.component';
import { DistinctUntilChangedComponent } from './operators/distinct-until-changed/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './operators/distinct-until-key-changed/distinct-until-key-changed/distinct-until-key-changed.component';
import { ElementAtComponent } from './operators/element-at/element-at/element-at.component';
import { FilterComponent } from './operators/filter/filter/filter.component';
import { FirstComponent } from './operators/first/first/first.component';
import { IgnoreElementsComponent } from './operators/ignore-elements/ignore-elements/ignore-elements.component';
import { LastComponent } from './operators/last/last/last.component';
import { SampleComponent } from './operators/sample/sample/sample.component';
import { SampleTimeComponent } from './operators/sample-time/sample-time/sample-time.component';
import { SingleComponent } from './operators/single/single/single.component';
import { SkipComponent } from './operators/skip/skip/skip.component';
import { SkipLastComponent } from './operators/skip-last/skip-last/skip-last.component';
import { SkipUntilComponent } from './operators/skip-until/skip-until/skip-until.component';
import { SkipWhileComponent } from './operators/skip-while/skip-while/skip-while.component';
import { TakeComponent } from './operators/take/take/take.component';
import { TakeLastComponent } from './operators/take-last/take-last/take-last.component';
import { TakeUntilComponent } from './operators/take-until/take-until/take-until.component';
import { TakeWhileComponent } from './operators/take-while/take-while/take-while.component';
import { ThrottleComponent } from './operators/throttle/throttle/throttle.component';
import { ThrottleTimeComponent } from './operators/throttle-time/throttle-time/throttle-time.component';
import { ConcatAllComponent } from './operators/concat-all/concat-all/concat-all.component';
import { MergeAllComponent } from './operators/merge-all/merge-all/merge-all.component';
import { StartWithComponent } from './operators/start-with/start-with/start-with.component';
import { WithLatestFromComponent } from './operators/with-latest-from/with-latest-from/with-latest-from.component';
import { ShareComponent } from './operators/share/share/share.component';
import { CatchErrorComponent } from './operators/catch-error/catch-error/catch-error.component';
import { RetryComponent } from './operators/retry/retry/retry.component';
import { TapComponent } from './operators/tap/tap/tap.component';
import { DelayComponent } from './operators/delay/delay/delay.component';
import { DelayWhenComponent } from './operators/delay-when/delay-when/delay-when.component';
import { DematerializeComponent } from './operators/dematerialize/dematerialize/dematerialize.component';
import { MaterializeComponent } from './operators/materialize/materialize/materialize.component';
import { SubscribeOnComponent } from './operators/subscribe-on/subscribe-on/subscribe-on.component';
import { TimeIntervalComponent } from './operators/time-interval/time-interval/time-interval.component';
import { TimestampComponent } from './operators/timestamp/timestamp/timestamp.component';
import { TimeoutComponent } from './operators/timeout/timeout/timeout.component';
import { ToArrayComponent } from './operators/to-array/to-array/to-array.component';
import { DefaultIfEmptyComponent } from './operators/default-if-empty/default-if-empty/default-if-empty.component';
import { EveryComponent } from './operators/every/every/every.component';
import { FindComponent } from './operators/find/find/find.component';
import { FindIndexComponent } from './operators/find-index/find-index/find-index.component';
import { IsEmptyComponent } from './operators/is-empty/is-empty/is-empty.component';
import { CountComponent } from './operators/count/count/count.component';
import { MaxComponent } from './operators/max/max/max.component';
import { MinComponent } from './operators/min/min/min.component';
import { ReduceComponent } from './operators/reduce/reduce/reduce.component';

const appRoutes: Routes = [
    {path: 'rxjs-test', component: RxjsComponent},
    {path: 'ajax', component: AjaxComponent},
    {path: 'defer', component: DeferComponent},
    {path: 'from', component: FromComponent},
    {path: 'from-event', component: FromEventComponent},
    {path: 'from-event-pattern', component: FromEventPatternComponent},
    {path: 'generate', component: GenerateComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of', component: OfComponent},
    {path: 'range', component: RangeComponent},
    {path: 'throw-error', component: ThrowErrorComponent},
    {path: 'timer', component: TimerComponent},
    {path: 'iif', component: IifComponent},

    {path: 'combine-latest', component: CombineLatestComponent},
    {path: 'concat', component: ConcatComponent},
    {path: 'fork-join', component: ForkJoinComponent},
    {path: 'merge', component: MergeComponent},
    {path: 'partition', component: PartitionComponent},
    {path: 'race', component: RaceComponent},
    {path: 'zip', component: ZipComponent},

    {path: 'buffer', component: BufferComponent},
    {path: 'buffer-count', component: BufferCountComponent},
    {path: 'buffer-time', component: BufferTimeComponent},
    {path: 'buffer-toggle', component: BufferToggleComponent},
    {path: 'buffer-when', component: BufferWhenComponent},
    {path: 'concat-map', component: ConcatMapComponent},
    {path: 'exhaust-map', component: ExhaustMapComponent},
    {path: 'expand', component: ExpandComponent},
    {path: 'group-by', component: GroupByComponent},
    {path: 'map', component: MapComponent},
    {path: 'merge-map', component: MergeMapComponent},
    {path: 'merge-scan', component: MergeScanComponent},
    {path: 'pairwise', component: PairwiseComponent},
    {path: 'scan', component: ScanComponent},
    {path: 'switch-map', component: SwitchMapComponent},
    {path: 'window', component: WindowComponent},
    {path: 'window-count', component: WindowCountComponent},
    {path: 'window-time', component: WindowTimeComponent},
    {path: 'window-toggle', component: WindowToggleComponent},
    {path: 'window-when', component: WindowWhenComponent},

    {path: 'audit', component: AuditComponent},
    {path: 'audit-time', component: AuditTimeComponent},
    {path: 'debounce', component: DebounceComponent},
    {path: 'debounce-time', component: DebounceTimeComponent},
    {path: 'distinct', component: DistinctComponent},
    {path: 'distinct-until-changed', component: DistinctUntilChangedComponent},
    {path: 'distinct-until-key-changed', component: DistinctUntilKeyChangedComponent},
    {path: 'element-at', component: ElementAtComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'first', component: FirstComponent},
    {path: 'ignore-elements', component: IgnoreElementsComponent},
    {path: 'last', component: LastComponent},
    {path: 'sample', component: SampleComponent},
    {path: 'sample-time', component: SampleTimeComponent},
    {path: 'single', component: SingleComponent},
    {path: 'skip', component: SkipComponent},
    {path: 'skip-last', component: SkipLastComponent},
    {path: 'skip-until', component: SkipUntilComponent},
    {path: 'skip-while', component: SkipWhileComponent},
    {path: 'take', component: TakeComponent},
    {path: 'take-last', component: TakeLastComponent},
    {path: 'take-until', component: TakeUntilComponent},
    {path: 'take-while', component: TakeWhileComponent},
    {path: 'throttle', component: ThrottleComponent},
    {path: 'throttle-time', component: ThrottleTimeComponent},

    {path: 'concat-all', component: ConcatAllComponent},
    {path: 'merge-all', component: MergeAllComponent},
    {path: 'start-with', component: StartWithComponent},
    {path: 'with-latest-from', component: WithLatestFromComponent},

    {path: 'share', component: ShareComponent},

    {path: 'catch-error', component: CatchErrorComponent},
    {path: 'retry', component: RetryComponent},

    {path: 'tap', component: TapComponent},
    {path: 'delay', component: DelayComponent},
    {path: 'delay-when', component: DelayWhenComponent},
    {path: 'dematerialize', component: DematerializeComponent},
    {path: 'materialize', component: MaterializeComponent},
    {path: 'subscribe-on', component: SubscribeOnComponent},
    {path: 'time-interval', component: TimeIntervalComponent},
    {path: 'timestamp', component: TimestampComponent},
    {path: 'timeout', component: TimeoutComponent},
    {path: 'to-array', component: ToArrayComponent},
    {path: 'default-if-empty', component: DefaultIfEmptyComponent},
    {path: 'every', component: EveryComponent},
    {path: 'find', component: FindComponent},
    {path: 'find-index', component: FindIndexComponent},
    {path: 'is-empty', component: IsEmptyComponent},

    {path: 'count', component: CountComponent},
    {path: 'max', component: MaxComponent},
    {path: 'min', component: MinComponent},
    {path: 'reduce', component: ReduceComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RxjsRoutingModule {}