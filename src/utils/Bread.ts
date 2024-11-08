import { RouteRecordNormalized } from "vue-router"

// 获取面包屑的路由名称数组
export function getNames(name: string, routes:RouteRecordNormalized[]): string[]{
    let names: string[] = []
    // 使用while循环进行递归操作，直至遍历到最顶级的父辈路由，然后退出循环
    while(true){
        names.push(name)
        let route = getRouteByName(name, routes) as RouteRecordNormalized
        let parentRoute = getRouteByName(route.meta?.parentRouteName as string, routes)
        if(parentRoute){
            name = parentRoute.name as string
            continue
        } 
        else{
            break
        }
    }
    return names.reverse()
}

function getRouteByName(name: string, routes: RouteRecordNormalized[]): RouteRecordNormalized {
    throw new Error("Function not implemented.")
}

