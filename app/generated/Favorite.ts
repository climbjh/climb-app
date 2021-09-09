import { Rest, RestObject, QueryOpts, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties, FieldResolver, SOQLQueryParams, buildQuery, FieldProps, PicklistConst, CalendarDate } from "ts-force";
import { Climber, ClimbingArea } from "./";

export type FavoriteFields = Partial<FieldProps<Favorite>>;

/**
 * Generated class for Favorite__c
 */
export class Favorite extends RestObject {
    @sField({ apiName: 'Id', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Record ID', externalId: false })
    public readonly id?: string | null;
    @sField({ apiName: 'OwnerId', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Owner ID', externalId: false })
    public ownerId?: string | null;
    @sField({ apiName: 'IsDeleted', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted', externalId: false })
    public readonly isDeleted?: boolean | null;
    @sField({ apiName: 'Name', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Favorite Name', externalId: false })
    public readonly name?: string | null;
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
    @sField({ apiName: 'Climber__r', createable: false, updateable: false, required: false, reference: () => { return Climber }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Climber', externalId: false })
    public climber?: Climber;
    @sField({ apiName: 'Climber__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Climber', externalId: false })
    public climberId?: string | null;
    @sField({ apiName: 'Area__r', createable: false, updateable: false, required: false, reference: () => { return ClimbingArea }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Area', externalId: false })
    public area?: ClimbingArea;
    @sField({ apiName: 'Area__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Area', externalId: false })
    public areaId?: string | null;

    constructor(fields?: FavoriteFields, restInstance?: Rest) {
        super('Favorite__c', restInstance);
        this.id = void 0;
        this.ownerId = void 0;
        this.isDeleted = void 0;
        this.name = void 0;
        this.createdDate = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.climber = void 0;
        this.climberId = void 0;
        this.area = void 0;
        this.areaId = void 0;
        this.__UUID = Favorite.__UUID;
        this.initObject(fields);
        return new Proxy(this, this.safeUpdateProxyHandler);
    }

    public static API_NAME: 'Favorite__c' = 'Favorite__c';
    public readonly _TYPE_: 'Favorite__c' = 'Favorite__c';
    public static __UUID = Symbol();
    private static _fields: { [P in keyof FieldProps<Favorite>]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : Favorite.getPropertiesMeta<FieldProps<Favorite>, Favorite>(Favorite)
    }

    public static async retrieve(qryParam: ((fields: FieldResolver<Favorite>) => SOQLQueryParams) | string, opts?: QueryOpts): Promise<Favorite[]> {

        const qry = typeof qryParam === 'function' ? buildQuery(Favorite, qryParam) : qryParam;
        return await RestObject.query<Favorite>(Favorite, qry, opts);

    }

    public static fromSFObject(sob: SObject): Favorite {
        return new Favorite().mapFromQuery(sob);
    }
}
