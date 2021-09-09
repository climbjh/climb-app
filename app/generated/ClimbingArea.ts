import { Rest, RestObject, QueryOpts, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties, FieldResolver, SOQLQueryParams, buildQuery, FieldProps, PicklistConst, CalendarDate } from "ts-force";
import { Favorite, Route } from "./";

export type ClimbingAreaFields = Partial<FieldProps<ClimbingArea>>;

/**
 * Generated class for Climbing_Area__c
 */
export class ClimbingArea extends RestObject {
    @sField({ apiName: 'Favorites__r', createable: false, updateable: false, required: false, reference: () => { return Favorite }, childRelationship: true, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Favorites__r', externalId: false })
    public favorites?: Favorite[];
    @sField({ apiName: 'Routes__r', createable: false, updateable: false, required: false, reference: () => { return Route }, childRelationship: true, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Routes__r', externalId: false })
    public routes?: Route[];
    @sField({ apiName: 'Id', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Record ID', externalId: false })
    public readonly id?: string | null;
    @sField({ apiName: 'OwnerId', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Owner ID', externalId: false })
    public ownerId?: string | null;
    @sField({ apiName: 'IsDeleted', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted', externalId: false })
    public readonly isDeleted?: boolean | null;
    @sField({ apiName: 'Name', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Climbing Area Name', externalId: false })
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
    @sField({ apiName: 'Number_of_Routes__c', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Number of Routes', externalId: false })
    public readonly numberOfRoutes?: number | null;
    @sField({ apiName: 'Parent_Area__r', createable: false, updateable: false, required: false, reference: () => { return ClimbingArea }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Parent Area', externalId: false })
    public parentArea?: ClimbingArea;
    @sField({ apiName: 'Parent_Area__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Parent Area', externalId: false })
    public parentAreaId?: string | null;
    @sField({ apiName: 'State__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'State', externalId: false })
    public state?: string | null;
    @sField({ apiName: 'Country__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Country', externalId: false })
    public country?: string | null;
    @sField({ apiName: 'Description__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Description', externalId: false })
    public description?: string | null;

    constructor(fields?: ClimbingAreaFields, restInstance?: Rest) {
        super('Climbing_Area__c', restInstance);
        this.favorites = void 0;
        this.routes = void 0;
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
        this.numberOfRoutes = void 0;
        this.parentArea = void 0;
        this.parentAreaId = void 0;
        this.state = void 0;
        this.country = void 0;
        this.description = void 0;
        this.__UUID = ClimbingArea.__UUID;
        this.initObject(fields);
        return new Proxy(this, this.safeUpdateProxyHandler);
    }

    public static API_NAME: 'Climbing_Area__c' = 'Climbing_Area__c';
    public readonly _TYPE_: 'Climbing_Area__c' = 'Climbing_Area__c';
    public static __UUID = Symbol();
    private static _fields: { [P in keyof FieldProps<ClimbingArea>]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : ClimbingArea.getPropertiesMeta<FieldProps<ClimbingArea>, ClimbingArea>(ClimbingArea)
    }

    public static async retrieve(qryParam: ((fields: FieldResolver<ClimbingArea>) => SOQLQueryParams) | string, opts?: QueryOpts): Promise<ClimbingArea[]> {

        const qry = typeof qryParam === 'function' ? buildQuery(ClimbingArea, qryParam) : qryParam;
        return await RestObject.query<ClimbingArea>(ClimbingArea, qry, opts);

    }

    public static fromSFObject(sob: SObject): ClimbingArea {
        return new ClimbingArea().mapFromQuery(sob);
    }
}
