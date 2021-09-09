import { Rest, RestObject, QueryOpts, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties, FieldResolver, SOQLQueryParams, buildQuery, FieldProps, PicklistConst, CalendarDate } from "ts-force";
import { Favorite } from "./";

export type ClimberFields = Partial<FieldProps<Climber>>;

/**
 * Generated class for Climber__c
 */
export class Climber extends RestObject {
    @sField({ apiName: 'Climber__r', createable: false, updateable: false, required: false, reference: () => { return Favorite }, childRelationship: true, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Climber__r', externalId: false })
    public climber?: Favorite[];
    @sField({ apiName: 'Id', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Record ID', externalId: false })
    public readonly id?: string | null;
    @sField({ apiName: 'OwnerId', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Owner ID', externalId: false })
    public ownerId?: string | null;
    @sField({ apiName: 'IsDeleted', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted', externalId: false })
    public readonly isDeleted?: boolean | null;
    @sField({ apiName: 'Name', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Climber Name', externalId: false })
    public name?: string | null;
    @sField({ apiName: 'CreatedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Created Date', externalId: false })
    public readonly createdDate?: Date | null;
    @sField({ apiName: 'CreatedById', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Created By ID', externalId: false })
    public readonly createdById?: string | null;
    @sField({ apiName: 'LastModifiedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Modified Date', externalId: false })
    public readonly lastModifiedDate?: Date | null;
    @sField({ apiName: 'LastModifiedById', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Last Modified By ID', externalId: false })
    public readonly lastModifiedById?: string | null;
    @sField({ apiName: 'SystemModstamp', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'System Modstamp', externalId: false })
    public readonly systemModstamp?: Date | null;
    @sField({ apiName: 'LastViewedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Viewed Date', externalId: false })
    public readonly lastViewedDate?: Date | null;
    @sField({ apiName: 'LastReferencedDate', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last Referenced Date', externalId: false })
    public readonly lastReferencedDate?: Date | null;
    @sField({ apiName: 'Preferred_Climbing_Style__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.MULTIPICKLIST, salesforceLabel: 'Preferred Climbing Style', externalId: false })
    public preferredClimbingStyle?: string[] | null;
    @sField({ apiName: 'Nickname__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Nickname', externalId: false })
    public nickname?: string | null;
    @sField({ apiName: 'Address__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Address', externalId: false })
    public address?: string | null;
    @sField({ apiName: 'Phone_Number__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Phone Number', externalId: false })
    public phoneNumber?: string | null;
    @sField({ apiName: 'Email__c', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.EMAIL, salesforceLabel: 'Email', externalId: false })
    public email?: string | null;
    @sField({ apiName: 'First_Name__c', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'First Name', externalId: false })
    public firstName?: string | null;
    @sField({ apiName: 'Last_Name__c', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Last Name', externalId: false })
    public lastName?: string | null;
    @sField({ apiName: 'Number_of_Ascents__c', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Number of Ascents', externalId: false })
    public readonly numberOfAscents?: number | null;

    constructor(fields?: ClimberFields, restInstance?: Rest) {
        super('Climber__c', restInstance);
        this.climber = void 0;
        this.id = void 0;
        this.ownerId = void 0;
        this.isDeleted = void 0;
        this.name = void 0;
        this.createdDate = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.lastViewedDate = void 0;
        this.lastReferencedDate = void 0;
        this.preferredClimbingStyle = void 0;
        this.nickname = void 0;
        this.address = void 0;
        this.phoneNumber = void 0;
        this.email = void 0;
        this.firstName = void 0;
        this.lastName = void 0;
        this.numberOfAscents = void 0;
        this.__UUID = Climber.__UUID;
        this.initObject(fields);
        return new Proxy(this, this.safeUpdateProxyHandler);
    }

    public static API_NAME: 'Climber__c' = 'Climber__c';
    public readonly _TYPE_: 'Climber__c' = 'Climber__c';
    public static __UUID = Symbol();
    private static _fields: { [P in keyof FieldProps<Climber>]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : Climber.getPropertiesMeta<FieldProps<Climber>, Climber>(Climber)
    }

    public static async retrieve(qryParam: ((fields: FieldResolver<Climber>) => SOQLQueryParams) | string, opts?: QueryOpts): Promise<Climber[]> {

        const qry = typeof qryParam === 'function' ? buildQuery(Climber, qryParam) : qryParam;
        return await RestObject.query<Climber>(Climber, qry, opts);

    }

    public static fromSFObject(sob: SObject): Climber {
        return new Climber().mapFromQuery(sob);
    }
}
