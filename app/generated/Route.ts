import { Rest, RestObject, QueryOpts, SObject, sField, SalesforceFieldType, SFLocation, SFieldProperties, FieldResolver, SOQLQueryParams, buildQuery, FieldProps, PicklistConst, CalendarDate } from "ts-force";
import { ClimbingArea } from "./";

export type RouteFields = Partial<FieldProps<Route>>;

/**
 * Generated class for Route__c
 */
export class Route extends RestObject {
    @sField({ apiName: 'Id', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Record ID', externalId: false })
    public readonly id?: string | null;
    @sField({ apiName: 'IsDeleted', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted', externalId: false })
    public readonly isDeleted?: boolean | null;
    @sField({ apiName: 'Name', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Route Name', externalId: false })
    public name?: string | null;
    @sField({ apiName: 'RecordTypeId', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Record Type ID', externalId: false })
    public recordTypeId?: string | null;
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
    @sField({ apiName: 'Minimum_Rope_Length__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Minimum Rope Length', externalId: false })
    public minimumRopeLength?: string | null;
    @sField({ apiName: 'Type__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Type', externalId: false })
    public type?: string | null;
    @sField({ apiName: 'Grade__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Grade', externalId: false })
    public grade?: string | null;
    @sField({ apiName: 'Climbing_Area__r', createable: false, updateable: false, required: false, reference: () => { return ClimbingArea }, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Climbing Area', externalId: false })
    public climbingArea?: ClimbingArea;
    @sField({ apiName: 'Climbing_Area__c', createable: true, updateable: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Climbing Area', externalId: false })
    public climbingAreaId?: string | null;
    @sField({ apiName: 'Height__c', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Height', externalId: false })
    public height?: string | null;
    @sField({ apiName: 'Necessary_Climbing_Styles__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.MULTIPICKLIST, salesforceLabel: 'Necessary Climbing Styles', externalId: false })
    public necessaryClimbingStyles?: string[] | null;
    @sField({ apiName: 'Descent__c', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Descent', externalId: false })
    public descent?: string | null;
    @sField({ apiName: 'Number_of_Rappels__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Number of Rappels', externalId: false })
    public numberOfRappels?: string | null;
    @sField({ apiName: 'Description__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Description', externalId: false })
    public description?: string | null;
    @sField({ apiName: 'Walkoff_Difficulty__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Walkoff Difficulty', externalId: false })
    public walkoffDifficulty?: string | null;
    @sField({ apiName: 'Jump_Height__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Jump Height (feet)', externalId: false })
    public jumpHeight?: string | null;
    @sField({ apiName: 'Number_of_Pads__c', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Number of Pads', externalId: false })
    public numberOfPads?: string | null;
    @sField({ apiName: 'Number_of_Ascents__c', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Number of Ascents', externalId: false })
    public readonly numberOfAscents?: number | null;

    constructor(fields?: RouteFields, restInstance?: Rest) {
        super('Route__c', restInstance);
        this.id = void 0;
        this.isDeleted = void 0;
        this.name = void 0;
        this.recordTypeId = void 0;
        this.createdDate = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.lastViewedDate = void 0;
        this.lastReferencedDate = void 0;
        this.minimumRopeLength = void 0;
        this.type = void 0;
        this.grade = void 0;
        this.climbingArea = void 0;
        this.climbingAreaId = void 0;
        this.height = void 0;
        this.necessaryClimbingStyles = void 0;
        this.descent = void 0;
        this.numberOfRappels = void 0;
        this.description = void 0;
        this.walkoffDifficulty = void 0;
        this.jumpHeight = void 0;
        this.numberOfPads = void 0;
        this.numberOfAscents = void 0;
        this.__UUID = Route.__UUID;
        this.initObject(fields);
        return new Proxy(this, this.safeUpdateProxyHandler);
    }

    public static API_NAME: 'Route__c' = 'Route__c';
    public readonly _TYPE_: 'Route__c' = 'Route__c';
    public static __UUID = Symbol();
    private static _fields: { [P in keyof FieldProps<Route>]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : Route.getPropertiesMeta<FieldProps<Route>, Route>(Route)
    }

    public static async retrieve(qryParam: ((fields: FieldResolver<Route>) => SOQLQueryParams) | string, opts?: QueryOpts): Promise<Route[]> {

        const qry = typeof qryParam === 'function' ? buildQuery(Route, qryParam) : qryParam;
        return await RestObject.query<Route>(Route, qry, opts);

    }

    public static fromSFObject(sob: SObject): Route {
        return new Route().mapFromQuery(sob);
    }
}
