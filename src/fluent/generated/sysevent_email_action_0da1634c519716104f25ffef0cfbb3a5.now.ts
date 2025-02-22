import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '0da1634c519716104f25ffef0cfbb3a5',
    table: 'sysevent_email_action',
    data: {
        action_insert: true,
        action_update: false,
        active: true,
        category: 'b8a7d60c4309b510bab01febb7b8f293',
        collection: 'incident',
        content_type: 'text/html',
        digest_separator_html: '<p>&nbsp;</p>\n<hr>\n<p>&nbsp;</p>',
        digest_separator_text: '\\n--------------------------------------------------------------------------------\\n',
        digestable: false,
        enable_dynamic_translation: false,
        event_name: 'activate.life.cycle.migration',
        event_parm_1: false,
        event_parm_2: false,
        exclude_delegates: false,
        force_delivery: false,
        generation_type: 'engine',
        include_attachments: false,
        item: 'event.parm1',
        mandatory: false,
        name: 'Notification_APP',
        omit_watermark: false,
        order: 100,
        push_message_only: false,
        send_self: true,
        subscribable: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        sys_name: 'Notification_APP',
        sys_version: 2,
        template: '7ed0481f3b0b2200c869c2c703efc487',
        type: 'email',
        weight: 0,
    },
})
