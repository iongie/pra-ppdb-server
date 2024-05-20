import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";
import { CekApiModule } from "./cek-api/cek-api.module";

const routes: Routes  = [
    {
        path: 'api',
        children: [
            {
                path: 'cek',
                module: CekApiModule
            }
        ]
    }
]

@Module({
    imports: [
        RouterModule.register(routes),
        CekApiModule
    ],
    exports: [
        RouterModule,
        CekApiModule
    ]
})

export class AppRoutingModule { }