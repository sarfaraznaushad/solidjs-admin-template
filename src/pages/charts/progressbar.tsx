import { Component, createSignal, Show } from "solid-js";


const AKProgressBar: Component<any> = ({ value }: { value: number }) => {
    const style: { [index: string]: string } = { width: `${value}%` }
    const remaining: { [index: string]: string } = { width: `${100 - value}%`}
    return (
        <div class="flex border rounded-lg">
            <Show when={value > 0} fallback={<div class="rounded text-xsm" style={style}> 0%</div>}>
                <div class="flex w-full p-0">
                    <div class="rounded bg-dark-purple text-white  text-xsm" style={style}> {value}%</div>
                    <div class="h-1" style={remaining}></div>
                </div>
            </Show>
          
            
        </div>

    )
}
export default AKProgressBar;