package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type MultiDatasetValidationName string

const (
	MultiDatasetValidationNameSameNumberOfRows  MultiDatasetValidationName = "same-number-of-rows"
	MultiDatasetValidationNameOuterJoinEmpty    MultiDatasetValidationName = "outer-join-empty"
	MultiDatasetValidationNameOuterJoinNotEmpty MultiDatasetValidationName = "outer-join-not-empty"
	MultiDatasetValidationNameInnerJoinEmpty    MultiDatasetValidationName = "inner-join-empty"
	MultiDatasetValidationNameInnerJoinNotEmpty MultiDatasetValidationName = "inner-join-not-empty"
	MultiDatasetValidationNameLeftJoinEmpty     MultiDatasetValidationName = "left-join-empty"
	MultiDatasetValidationNameLeftJoinNotEmpty  MultiDatasetValidationName = "left-join-not-empty"
	MultiDatasetValidationNameRightJoinEmpty    MultiDatasetValidationName = "right-join-empty"
	MultiDatasetValidationNameRightJoinNotEmpty MultiDatasetValidationName = "right-join-not-empty"
)

type MultiDatasetValidation struct {
	// +kubebuilder:validation:Optional
	Type *MultiDatasetValidationName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// +kubebuilder:validation:Optional
	Datasets []string `json:"datasets,omitempty" protobuf:"bytes,2,rep,name=datasets"`
	// Generated indicate weather this validation rule was automatically generated
	// +kubebuilder:validation:Optional
	Generated *bool `json:"generated,omitempty" protobuf:"varint,3,rep,name=generated"`
}

type DatasetValidationName string

const (
	DatasetValidationNameColumnsCountEqual    DatasetValidationName = "columns-count-equal"
	DatasetValidationNameColumnsNameInSet     DatasetValidationName = "columns-in-set"
	DatasetValidationNameColumnsInOrderedList DatasetValidationName = "columns-in-ordered-list"
	DatasetValidationNameRowCountBetween      DatasetValidationName = "row-count-between"
	DatasetValidationNameNameNotEmpty         DatasetValidationName = "dataset-not-empty"
	DatasetValidationNameNameEmpty            DatasetValidationName = "dataset-empty"
)

type DatasetValidation struct {
	// +kubebuilder:validation:Optional
	Type *DatasetValidationName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Min *float64 `json:"min,omitempty" protobuf:"bytes,2,opt,name=min"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Max *float64 `json:"max,omitempty" protobuf:"bytes,3,opt,name=max"`
	// +kubebuilder:validation:Optional
	ValueSet []string `json:"valueSet,omitempty" protobuf:"bytes,4,rep,name=valueSet"`
	// +kubebuilder:validation:Optional
	StrictMin *bool `json:"strictMin,omitempty" protobuf:"varint,5,opt,name=strictMin"`
	// +kubebuilder:validation:Optional
	StrictMax *bool `json:"strictMax,omitempty" protobuf:"varint,6,opt,name=strictMax"`
	// Generated indicate weather this validation rule was automatically generated
	// +kubebuilder:validation:Optional
	Generated *bool `json:"generated,omitempty" protobuf:"varint,7,rep,name=generated"`
}

const (
	MultiColumnCorr MultiColumnValidationName = "multi-column-corr"
)

type MultiColumnValidationName string

type MultiColumnValidation struct {
	// +kubebuilder:validation:Optional
	Type *MultiColumnValidationName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// +kubebuilder:validation:Optional
	Columns []string `json:"columns,omitempty" protobuf:"bytes,2,rep,name=columns"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Min *float64 `json:"min,omitempty" protobuf:"bytes,3,opt,name=min"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Max *float64 `json:"max,omitempty" protobuf:"bytes,4,opt,name=max"`
	// +kubebuilder:validation:Optional
	ValueSet []string `json:"valueSet,omitempty" protobuf:"bytes,5,rep,name=valueSet"`
	// +kubebuilder:validation:Optional
	StrictMin *bool `json:"strictMin,omitempty" protobuf:"varint,6,opt,name=strictMin"`
	// +kubebuilder:validation:Optional
	StrictMax *bool `json:"strictMax,omitempty" protobuf:"varint,7,opt,name=strictMax"`
	// Generated indicate weather this validation rule was automatically generated
	// +kubebuilder:validation:Optional
	Generated *bool `json:"generated,omitempty" protobuf:"varint,8,rep,name=generated"`
}

type ColumnValidationName string

const (
	ColumnValidationNameColumnExist      ColumnValidationName = "column-exist"
	ColumnValidationNameColumnHaveValues ColumnValidationName = "have-values"
	ColumnValidationNameColumnHasNoValue ColumnValidationName = "has-no-values"
	ColumnValidationNameColumnHaveNulls  ColumnValidationName = "value-have-nulls"
	ColumnValidationNameColumnHasNoNull  ColumnValidationName = "value-has-no-nulls"
	ColumnValidationNameColumnOfType     ColumnValidationName = "value-of-type"
	ColumnValidationNameInSet            ColumnValidationName = "values-in-set"
	ColumnValidationNameIncreasing       ColumnValidationName = "values-increasing"
	ColumnValidationNameDecreasing       ColumnValidationName = "values-decreasing"
	ColumnValidationNameLengthBetween    ColumnValidationName = "value-length-between"
	ColumnValidationNameMatchRegex       ColumnValidationName = "value-match-regex"
	ColumnValidationNameIsDate           ColumnValidationName = "value-is-date"
	ColumnValidationNameIsJson           ColumnValidationName = "value-is-json"
	ColumnValidationInDomain             ColumnValidationName = "value-in-domain"
	// Count
	ColumnValidationNameUniqueValueCountBetween   ColumnValidationName = "unique-value-count-between"
	ColumnValidationNameOutlierValueUniqueBetween ColumnValidationName = "outlier-value-count-between"
	ColumnValidationNameValidValueUniqueBetween   ColumnValidationName = "valid-values-count-between"
	ColumnValidationNameMismatchValueBetween      ColumnValidationName = "mismatch-values-between"
	// Stat
	ColumnValidationNameMinBetween           ColumnValidationName = "min-between"
	ColumnValidationNameLowerQuartileBetween ColumnValidationName = "lower-quartile-between"
	ColumnValidationNameMedianBetween        ColumnValidationName = "median-between"
	ColumnValidationNameAvgBetween           ColumnValidationName = "average-between"
	ColumnValidationNameUpperQuartileBetween ColumnValidationName = "upper-quartile-between"
	ColumnValidationNameMaxBetween           ColumnValidationName = "max-between"
	ColumnValidationStddevBetween            ColumnValidationName = "stddev-between"
	ColumnValidationChiSquarePValueBetween   ColumnValidationName = "chi-square-p-value-between"
	ColumnValidationPairCramersBetween       ColumnValidationName = "pair-cramers-between"
)

type ColumnValidation struct {
	// +kubebuilder:validation:Optional
	Type *ColumnValidationName `json:"type,omitempty" protobuf:"bytes,1,opt,name=type"`
	// +kubebuilder:validation:Optional
	Column *string `json:"column,omitempty" protobuf:"bytes,2,opt,name=column"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Min *float64 `json:"min,omitempty" protobuf:"bytes,3,opt,name=min"`
	// +kubebuilder:validation:Format=float
	// +kubebuilder:validation:Type=number
	// +kubebuilder:validation:Optional
	Max *float64 `json:"max,omitempty" protobuf:"bytes,4,opt,name=max"`
	// +kubebuilder:validation:Optional
	ValueSet []string `json:"valueSet,omitempty" protobuf:"bytes,5,rep,name=valueSet"`
	// +kubebuilder:validation:Optional
	StrictMin *bool `json:"strictMin,omitempty" protobuf:"varint,6,opt,name=strictMin"`
	// +kubebuilder:validation:Optional
	StrictMax *bool `json:"strictMax,omitempty" protobuf:"varint,7,opt,name=strictMax"`
	// Generated indicate weather this validation rule was automatically generated
	// +kubebuilder:validation:Optional
	Generated *bool `json:"generated,omitempty" protobuf:"varint,8,rep,name=generated"`
}

// Condition on the dataset
type DataSourceConditionType string

/// Datastore Condition
const (
	// Regular state of the store.
	DatasourceReady DataSourceConditionType = "Ready"
	DatasourceSaved DataSourceConditionType = "Saved"
)

// DataSourceCondition describes the state of a datasource at a certain point.
type DataSourceCondition struct {
	// Type of condition.
	Type DataSourceConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataSourceConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

type TableSpec struct {
	// The actual query. this is required.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Query *string `json:"query,omitempty" protobuf:"bytes,1,opt,name=query"`
	// TableName refer to whole table
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TableName *string `json:"tableName,omitempty" protobuf:"bytes,2,opt,name=tableName"`
	// Connection refer to a connection object that point to secret
	// +kubebuilder:validation:Optional
	Connection v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,3,opt,name=connectionRef"`
}

type StreamSpec struct {
	// Topic is the stream topic
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Topic *string `json:"topic,omitempty" protobuf:"bytes,1,opt,name=topic"`
	// Connection refer to a connection object that point to secret
	// +kubebuilder:validation:Optional
	Connection v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,2,opt,name=connectionRef"`
}

type ApiSpec struct {
	// URI is the uri of the api
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	URI *string `json:"topic,omitempty" protobuf:"bytes,1,opt,name=topic"`
	// Connection refer to a connection object that point to secret
	// +kubebuilder:validation:Optional
	Connection v1.ObjectReference `json:"connectionRef,omitempty" protobuf:"bytes,2,opt,name=connectionRef"`
}

// the data source type
// +kubebuilder:validation:Enum="flatfile";"table";"stream";"api"
type DataSourceType string

const (
	FlatFileDataSource DataSourceType = "flatfile"
	TableDataSource    DataSourceType = "table"
	StreamDataSource   DataSourceType = "stream"
	ApiDataSource      DataSourceType = "api"
)

// +kubebuilder:validation:Enum="double-quote";"single-quote";
type QuoteChar string

const (
	SingleQuote QuoteChar = "double-quote"
	DoubleQuote QuoteChar = "single-quote"
)

type EscapeChar string

const (
	SingleEscapeChar EscapeChar = "double-quote"
	DoubleEscapeChar EscapeChar = "single-quote"
	Tilda            EscapeChar = "tilda"
)

// Delimiter specify char or group of char
// +kubebuilder:validation:Enum="crlf";"cr";"lf";"semicolon";"colon";"comma";"tab";"space";"pipe"
type Delimiter string

const (
	DelimiterCRLF      Delimiter = "crlf"
	DelimiterCR        Delimiter = "cr"
	DelimiterLF        Delimiter = "lf"
	DelimiterSemicolon Delimiter = "semicolon"
	DelimiterColon     Delimiter = "colon"
	DelimiterComma     Delimiter = "comma"
	DelimiterTab       Delimiter = "tab"
	DelimiterSpace     Delimiter = "space"
	DelimiterPipe      Delimiter = "pipe"
)

// FlatFileType represent the type of the file
// +kubebuilder:validation:Enum="csv";"tsv";"excel";"fwf";"hdf";"html";"json";"pickle";"sas";"stata";"feather";
type FlatFileType string

const (
	FlatFileTypeCsv     FlatFileType = "csv"
	FlatFileTypeTable   FlatFileType = "tsv"
	FlatFileTypeExcel   FlatFileType = "excel"
	FlatFileTypeFwf     FlatFileType = "fwf"
	FlatFileTypeHdf5    FlatFileType = "hdf"
	FlatFileTypeHtml    FlatFileType = "html"
	FlatFileTypeJson    FlatFileType = "json"
	FlatFileTypePickle  FlatFileType = "pickle"
	FlatFileTypeSas     FlatFileType = "sas"
	FlatFileTypeStata   FlatFileType = "stata"
	FlatFileTypeFeather FlatFileType = "feather"
)

// DatabaseServerType is the type of the database server
// +kubebuilder:validation:Enum="sqlserver";"mysql";"postgress";"sqlite";"oracle";"presto";"redshift";"apache-hive";"snowflake";"sybase";"vertica";"cockroach-db";"elasticsearch";"informix";"sap-hana";"teradata";"gcp-spanner";"apache-spark";"clickhouse";"greenplum";"couchbase";"exasol"
type DatabaseServerType string

const (
	MsSqlServer    DatabaseServerType = "sqlserver"
	MySql          DatabaseServerType = "mysql"
	Postgres       DatabaseServerType = "postgres"
	SqlLite        DatabaseServerType = "sqlite"
	Oracle         DatabaseServerType = "oracle"
	Presto         DatabaseServerType = "presto"
	AmazonRedShift DatabaseServerType = "redshift"
	ApacheHive     DatabaseServerType = "apache-hive"
	Snowflake      DatabaseServerType = "snowflake"
	Sybase         DatabaseServerType = "sybase"
	Vertica        DatabaseServerType = "vertica"
	CockroachDB    DatabaseServerType = "cockroach-db"
	ElasticSearch  DatabaseServerType = "elasticsearch"
	Informix       DatabaseServerType = "informix"
	SAPHana        DatabaseServerType = "sap-hana"
	Teradata       DatabaseServerType = "teradata"
	GcpSpanner     DatabaseServerType = "gcp-spanner"
	ApacheSpark    DatabaseServerType = "apache-spark"
	ClickHouse     DatabaseServerType = "clickhouse"
	GreenPlum      DatabaseServerType = "greenplum"
	Couchbase      DatabaseServerType = "couchbase"
	Exasol         DatabaseServerType = "exasol"
)

type FlatFileSpec struct {
	// The text file type
	// Default: csv
	// +kubebuilder:default:="csv"
	// +kubebuilder:validation:Optional
	FileType *FlatFileType `json:"fileType,omitempty" protobuf:"bytes,4,opt,name=fileType"`
	// Refers to the character used to separate fields.
	// Default to comma
	// +kubebuilder:validation:Optional
	Delimiter *Delimiter `json:"delimiter,omitempty" protobuf:"bytes,5,opt,name=delimiter"`
	//The quote char.
	// +kubebuilder:validation:Optional
	QuoteChar QuoteChar `json:"quote,omitempty" protobuf:"bytes,6,opt,name=quote"`
	// the char used to escape the delimiter when quoting
	// +kubebuilder:validation:Optional
	EscapeChar EscapeChar `json:"escapeChar,omitempty" protobuf:"bytes,7,opt,name=escapeChar"`
	//CommentCharacter(s) to split comments off the end of lines.
	// +kubebuilder:validation:Optional
	CommentChars string `json:"commentChars,omitempty" protobuf:"bytes,8,opt,name=commentChars"`
	//Check if there is an header
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Header *bool `json:"header,omitempty" protobuf:"varint,9,opt,name=header"`
	//The number of rows to skip
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	SkipRows *int32 `json:"skipRows,omitempty" protobuf:"varint,10,opt,name=skipRows"`
	// NullValue is a sequence of values to replace with NA.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	NullValues *string `json:"nullValues,omitempty" protobuf:"bytes,11,opt,name=nullValues"`
	//Encoding for Unicode (e.g., 'utf-8' for UTF-8 encoded text).
	// +kubebuilder:default:="utf-8"
	// +kubebuilder:validation:Optional
	Encoding *catalog.FileEncoding `json:"encoding,omitempty" protobuf:"bytes,12,opt,name=encoding"`
	//The maximum number of rows to read.
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxRows *int32 `json:"maxRows,omitempty" protobuf:"varint,13,opt,name=maxRows"`
	//If true, the import will fail if there is an error
	// +kubebuilder:default:=true
	// +kubebuilder:validation:Optional
	Strict *bool `json:"strict,omitempty" protobuf:"varint,14,opt,name=strict"`
}

type ValidationSpec struct {
	// MultiDatasetAssertions contains assertions for multi datasets
	// +kubebuilder:validation:Optional
	MultiDatasetValidations []MultiDatasetValidation `json:"multiDatasetValidations,omitempty" protobuf:"bytes,1,opt,name=multiDatasetValidations"`
	// DatasetAssertions contains assertions for datasets
	// +kubebuilder:validation:Optional
	DatasetValidations []DatasetValidation `json:"datasetValidations,omitempty" protobuf:"bytes,2,opt,name=datasetValidations"`
	// MultiColumnAssertions defines assertions for combined columns from the dataset
	// +kubebuilder:validation:Optional
	MultiColumnValidations []MultiColumnValidation `json:"multiColumnValidations,omitempty" protobuf:"bytes,3,opt,name=multiColumnValidations"`
	// MultiColumnAssertions defines assertions for combined columns from the dataset
	// +kubebuilder:validation:Optional
	ColumnValidations []ColumnValidation `json:"columnValidations,omitempty" protobuf:"bytes,4,opt,name=columnValidations"`
}

type Schema struct {
	// Time series schema. Set time series specific parameters.
	// +kubebuilder:validation:Optional
	TimeSeriesSchema *TimeSeriesSchema `json:"timeSeriesSchema,omitempty" protobuf:"bytes,1,opt,name=timeSeriesSchema"`
	// Columns
	Columns []Column `json:"columns,omitempty" protobuf:"bytes,2,rep,name=columns"`
	// Validation spec define the validation to perform on new datasets
	Validation *ValidationSpec `json:"validation,omitempty" protobuf:"bytes,3,opt,name=validation"`
}

type TimeSeriesSchema struct {
	// The time series frequency
	// required
	Freq catalog.Freq `json:"freq,omitempty" protobuf:"bytes,1,opt,name=freq"`
	// take holiday into account
	// required
	// default is US
	Country *catalog.HolidayCountry `json:"country,omitempty" protobuf:"bytes,2,opt,name=country"`
}

type Column struct {
	// FileName specify the name of the attribute
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// FileName specify the name of the feature, if this attribute comes from a feature
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	FeatureName *string `json:"featureName,omitempty" protobuf:"bytes,2,opt,name=featureName"`
	// Type specify the data type of the attribute
	// required
	DataType catalog.DataType `json:"datatype" protobuf:"bytes,3,opt,name=datatype"`
	// DataFormat is the domain of the column. A domain constrain the set of values.
	// +kubebuilder:validation:Optional
	Format *catalog.DataFormat `json:"format,omitempty" protobuf:"bytes,4,opt,name=format"`
	// Description is a description of the feature
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,5,opt,name=description"`
	// Ignore specify if the attribute should be ignored when building the model
	// default is false
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Ignore *bool `json:"ignore,omitempty" protobuf:"varint,6,opt,name=ignore"`
	// Label should be true if this attribute is the predictable target
	// Default is false
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Label *bool `json:"label,omitempty" protobuf:"varint,7,opt,name=label"`
	// Nullable indicates if a column can contain string
	// Default is false
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Nullable *bool `json:"nullable,omitempty" protobuf:"varint,8,opt,name=nullable"`
	// PrimaryKey denotes if this column is part of the file key.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PK *bool `json:"pk,omitempty" protobuf:"varint,9,opt,name=pk"`
	// MultipleOf
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MultipleOf *int32 `json:"multipleOf,omitempty" protobuf:"varint,10,opt,name=multipleOf"`
	// MaximumFloat
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Maximum *float64 `json:"maximum,omitempty" protobuf:"bytes,11,opt,name=maximum"`
	// ExclusiveMaximum
	// +kubebuilder:validation:Optional
	ExclusiveMaximum *bool `json:"exclusiveMaximum,omitempty" protobuf:"varint,12,opt,name=exclusiveMaximum"`
	// MinimumFloat
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Minimum *float64 `json:"minimum,omitempty" protobuf:"bytes,13,opt,name=minimum"`
	// ExclusiveMinimum
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	ExclusiveMinimum *bool `json:"exclusiveMinimum,omitempty" protobuf:"varint,14,opt,name=exclusiveMinimum"`
	// MaxLength
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxLength *int32 `json:"maxLength,omitempty" protobuf:"varint,15,opt,name=maxLength"`
	// MinLength
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MinLength *int32 `json:"minLength,omitempty" protobuf:"varint,16,opt,name=minLength"`
	// Pattern
	// Default is empty
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Pattern *string `json:"pattern,omitempty" protobuf:"bytes,17,opt,name=pattern"`
	// Required
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Required *bool `json:"required,omitempty" protobuf:"varint,18,opt,name=required"`
	// Title
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Optional
	Title *string `json:"title,omitempty" protobuf:"bytes,19,opt,name=title"`
	// Example
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Example *string `json:"example,omitempty" protobuf:"bytes,20,opt,name=example"`
	// External Docs
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ExternalDocs *string `json:"externalDocs,omitempty" protobuf:"bytes,21,opt,name=externalDocs"`
	// Enum
	// +kubebuilder:validation:Optional
	Enum []string `json:"enum,omitempty" protobuf:"bytes,22,rep,name=enum"`
	// Preprocessor hint constrain the transformer
	// Default is empty
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	TransformerHint *string `json:"transformerHint,omitempty" protobuf:"bytes,23,opt,name=transformerHint"`
	// Max Items in the data in case of a list
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MaxItems *int32 `json:"maxItems,omitempty" protobuf:"varint,24,opt,name=maxItems"`
	// Min Items in the data in case of a list.
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	MinItems *int32 `json:"minItems,omitempty" protobuf:"varint,25,opt,name=minItems"`
	// Enforce that all the items in the list are unique
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	UniqueItems *bool `json:"uniqueItems,omitempty" protobuf:"varint,26,opt,name=uniqueItems"`
	// TimeColumn is true if this column is used as the time axis in time series foreacst
	// Default is false.
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	TimeColumn *bool `json:"timeColumn,omitempty" protobuf:"varint,27,opt,name=timeColumn"`
	// Personally Identifiable information
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PII *bool `json:"pii,omitempty" protobuf:"varint,28,opt,name=pii"`
	// Personally Health information
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PHI *bool `json:"phi,omitempty" protobuf:"varint,29,opt,name=phi"`
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	PersonalData *bool `json:"personalData,omitempty" protobuf:"varint,30,opt,name=personalData"`
	// Protected means that this feature is important for ethical AI / Fairness
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Protected *bool `json:"protected,omitempty" protobuf:"varint,31,opt,name=protected"`
	// The following attribute concern with syntatic data and validation
	// DefaultValueNum is the default value for numbers
	DefaultValueNum *float64 `json:"DefaultValueNum,omitempty" protobuf:"bytes,32,opt,name=defaultValueNum"`
	// Log if true, values from this column will be sampled on logaritmic scale
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	Log *bool `json:"log,omitempty" protobuf:"varint,33,opt,name=log"`
	// Mu is the mean of the normal distribution
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Mu *float64 `json:"mu,omitempty" protobuf:"bytes,34,opt,name=mu"`
	// Sigma is the standard deviation of the distribution
	// +kubebuilder:default:=0
	// +kubebuilder:validation:Optional
	Sigma *float64 `json:"sigma,omitempty" protobuf:"bytes,35,opt,name=sigma"`
	// Skew treshold is the treshold for skew detection.
	// +kubebuilder:validation:Optional
	SkewTreshold *float64 `json:"skewThreshold,omitempty" protobuf:"bytes,36,opt,name=skewThreshold"`
	// Drift treshold is the treshold for drift detection.
	// +kubebuilder:validation:Optional
	DriftTreshold *float64 `json:"driftThreshold,omitempty" protobuf:"bytes,37,opt,name=driftThreshold"`
}

// DataSource represent source of the data in the system. The spec consist of schema
// +kubebuilder:object:root=true
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner"
// +kubebuilder:printcolumn:name="Version",type="string",JSONPath=".spec.versionName"
// +kubebuilder:printcolumn:name="Type",type="string",JSONPath=".spec.type"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=datasources,singular=datasource,shortName="dsrc",categories={data,modeld,all}
type DataSource struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataSourceSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DataSourceStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

type DataSourceSpec struct {
	// The account name of the owner of this dataset
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,1,opt,name=owner"`
	// The version of the flat file.
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,2,opt,name=versionName"`
	// User provided description of the data source
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=512
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,3,opt,name=description"`
	// The data source schema
	Schema *Schema `json:"schema,omitempty" protobuf:"bytes,4,opt,name=schema"`
	// The data source type.
	Type *DataSourceType `json:"type,omitempty" protobuf:"bytes,5,opt,name=type"`
	// FlatFile access specification
	// +kubebuilder:validation:Optional
	FlatFile *FlatFileSpec `json:"flatfile,omitempty" protobuf:"bytes,6,opt,name=flatfile"`
	// Table access specification if the data source is a table
	// +kubebuilder:validation:Optional
	Table *TableSpec `json:"table,omitempty" protobuf:"bytes,7,opt,name=table"`
	// Stream define the specification of the stream
	// +kubebuilder:validation:Optional
	Stream *StreamSpec `json:"stream,omitempty" protobuf:"bytes,8,opt,name=stream"`
	// Api define the specification of the api
	// +kubebuilder:validation:Optional
	Api *ApiSpec `json:"api,omitempty" protobuf:"bytes,9,opt,name=api"`
	// Type is the dataset type
	// +kubebuilder:default:="tabular"
	// +kubebuilder:validation:Optional
	DatasetType *catalog.DatasetType `json:"datasetType,omitempty" protobuf:"bytes,17,opt,name=datasetType"`
	// Sample spec defines how many rows to use for analysis for datasets from this datasource.
	Sample SampleSpec `json:"sample,omitempty" protobuf:"bytes,18,opt,name=sample"`
}

// FlatFileStatus defines the observed state of FlatFileSpec
type DataSourceStatus struct {
	// number of columns in the data source
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Cols int32 `json:"cols,omitempty" protobuf:"varint,1,opt,name=cols"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,2,opt,name=observedGeneration"`
	// Last time an dataset from this datasource was created.
	//+kubebuilder:validation:Optional
	LastDatasetCreated *metav1.Time `json:"lastDatasetCreated,omitempty" protobuf:"bytes,3,opt,name=lastDatasetCreated"`
	// Last dataset name
	//+kubebuilder:validation:Optional
	LastDatasetName string `json:"lastDatasetName,omitempty" protobuf:"bytes,4,opt,name=lastDatasetName"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,5,opt,name=lastUpdated"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []DataSourceCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,6,rep,name=conditions"`
}

// +kubebuilder:object:root=true
// DataSourceList contain a list of DataSource objects
type DataSourceList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataSource `json:"items" protobuf:"bytes,2,rep,name=items"`
}
