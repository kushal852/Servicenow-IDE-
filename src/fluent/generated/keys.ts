import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'e8b4aba031a04885ac24b4b4c6ff542d'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'fdd7b8098fa341ca8dfa9aaf296c0136'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '1ec2e143abf147f8b99052039de03416'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'bef45991fba74c62a3eccfc7c0353e2a'
                    }
                }
            }
        }
    }
}
